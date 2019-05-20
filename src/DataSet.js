import Validator from "./Validator";
import Errors from "./Errors";

export default class DataSet {

    /**
     * Create a new Manager instance.
     * The data object parameter will initialize the set's data properties.
     * The passover parameter is retained and added to the sending data in case of a submit request.
     * A validator instance is also
     *
     * @param {object} data
     * @param {object} passover
     */
    constructor(data) {

        this.originalData = {};

        this.passover = data.passover;
        delete data.passover;

        this.initialize(data);

        this.sending = false;

        this.validator = new Validator(data);

        this.errors = new Errors();
    }

    initialize(data) {

        for (let field in data) {
            this.originalData[field] = data[field];
            this[field] = data[field].hasOwnProperty('value') ? data[field].value : '';
        }

    }

    /**
     * validate the current value of an item
     * @param name
     */
    item(name) {
        if(this.hasOwnProperty(name)) {
            let res = this.validator.item(name, this[name]);
            if(res !== true) {
                this.errors.add(name, res);
            }
        }
    }

    /**
     * validate all items.
     */
    validate() {
        for(let property in this.data() ) {
            this.item(property);
        }
    }

    /**
     * Fetch all relevant data for the form.
     */
    data() {
        let data = {};

        for (let property in this.originalData) {
            data[property] = this[property];
        }

        return Object.assign(data, this.passover);
    }

    /**
     * Reset the form fields.
     */
    reset() {
        for (let field in this.originalData) {
            this[field] = '';
        }

        this.errors.clear();
    }

    /**
     * Send a POST request to the given URL.
     * .
     * @param {string} url
     */
    post(url) {
        return this.submit('post', url);
    }

    /**
     * Send a PUT request to the given URL.
     * .
     * @param {string} url
     */
    put(url) {
        return this.submit('put', url);
    }

    /**
     * Send a PATCH request to the given URL.
     * .
     * @param {string} url
     */
    patch(url) {
        return this.submit('patch', url);
    }

    /**
     * Send a DELETE request to the given URL.
     * .
     * @param {string} url
     */
    delete(url) {
        return this.submit('delete', url);
    }

    /**
     * Submit the form.
     *
     * @param {string} requestType
     * @param {string} url
     */
    submit(requestType, url) {

        this.sending = true;

        return new Promise((resolve, reject) => {

            axios[requestType](url,
                requestType !== 'get' ?
                    this.data() :
                    { params: this.data() },
            )

                .then(response => {
                    this.sending = false;
                    this.onSuccess(response.data);

                    resolve(response.data);
                })

                .catch(error => {
                    this.sending = false;
                    this.onFail(error.response.data.hasOwnProperty('errors') ? error.response.data.errors : {});

                    reject(error.response.data);
                });
        });
    }

    /**
     * Handle a successful form submission.
     *
     * @param {object} data
     */
    onSuccess(data) {
        this.reset();
    }

    /**
     * Handle a failed form submission.
     *
     * @param {object} errors
     */
    onFail(errors) {
        this.errors.record(errors);
    }
}