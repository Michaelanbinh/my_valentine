// Password here
const authens = [
    {
        id: '1',
        pw: '14/02/2025',
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