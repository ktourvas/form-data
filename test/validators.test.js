import {
    email, required, letters, numbers, decimal, greekphone, greekmobile, greeklandline,
    greekcypriotmobile, greekcypriotmobile10, integer
} from '../src/validators';

test('common form validations', () => {

    expect(required('')).toBeFalsy();
    expect(required('akjshdahjsa')).toBeTruthy();

    expect(letters('')).toBeTruthy();
    expect(letters('d3df4d24d3f4g4')).toBeFalsy();
    expect(letters('lakskhde')).toBeTruthy();

    expect(numbers('')).toBeTruthy();
    expect(numbers('d3df4d24d3f4g4')).toBeFalsy();
    expect(numbers('3821241278')).toBeTruthy();

    expect(integer('')).toBeTruthy();
    expect(integer('3141.28')).toBeFalsy();
    expect(integer('213')).toBeFalsy();
    expect(integer(213)).toBeTruthy();

    expect(decimal('')).toBeTruthy();
    expect(decimal('31413')).toBeFalsy();
    expect(decimal('213.23')).toBeTruthy();

    expect(email('')).toBeTruthy();
    expect(email('kasjadsa.assasa@ksajsasa')).toBeFalsy();
    expect(email('eldude@gmail.com')).toBeTruthy();

});


test('correct phone input values', () => {

    expect(greekphone('')).toBeTruthy();
    expect(greekphone('2108788776')).toBeTruthy();

    expect(greekmobile('')).toBeTruthy();
    expect(greekmobile('6962778877')).toBeTruthy();

    expect(greeklandline('')).toBeTruthy();
    expect(greeklandline('2109988776')).toBeTruthy();

    expect(greekcypriotmobile('')).toBeTruthy();
    expect(greekcypriotmobile('6962778877')).toBeTruthy();
    expect(greekcypriotmobile('35799887765')).toBeTruthy();

    expect(greekcypriotmobile10('')).toBeTruthy();
    expect(greekcypriotmobile10('6962778877')).toBeTruthy();
    expect(greekcypriotmobile10('5799887765')).toBeTruthy();

});

test('wrong phone input values', () => {

    expect(greekphone('21087887768')).toBeFalsy();
    expect(greekphone('21087887')).toBeFalsy();

    expect(greekmobile('696277887787')).toBeFalsy();
    expect(greekmobile('6262778877')).toBeFalsy();
    expect(greekmobile('2962778877')).toBeFalsy();

    expect(greeklandline('210998877642')).toBeFalsy();
    expect(greeklandline('3109988776')).toBeFalsy();

    expect(greekcypriotmobile('696277887784')).toBeFalsy();
    expect(greekcypriotmobile('35799887765723')).toBeFalsy();
    expect(greekcypriotmobile('4327788775')).toBeFalsy();
    expect(greekcypriotmobile('54579987765')).toBeFalsy();

    expect(greekcypriotmobile10('696277887784')).toBeFalsy();
    expect(greekcypriotmobile10('35799887765723')).toBeFalsy();
    expect(greekcypriotmobile10('4327788775')).toBeFalsy();
    expect(greekcypriotmobile10('5457998776')).toBeFalsy();

});
