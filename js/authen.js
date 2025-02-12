// Password here
const authens = [
    {
        id: '1',
        pw: 'asdfghjkl',
    }
];

const checkAuthen = function (id, pw) {
    let isMatched = false;
    for (authen of authens) {
        if (id === authen.id && pw === authen.pw) {
            isMatched = true;
        }
    }

    return isMatched;
}