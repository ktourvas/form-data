export default class Validator {

    constructor (data) {
        this.data = data;
    }

    item (item, value) {

        if(this.data.hasOwnProperty(item)) {

            let result = true;

            Object.keys(this.data[item].rules).map( ( name ) => {

                let validator = this.data[item].rules[name];

                if(!validator(value)) {

                    if(typeof result == 'boolean') {
                        result = [];
                    }

                    result.push(
                        this.data[item].hasOwnProperty('messages') ?
                            this.data[item].messages.hasOwnProperty(validator.name) ?
                            this.data[item].messages[validator.name] : validator.name : validator.name
                    );

                }
            });

            return result;

        }

    }

}