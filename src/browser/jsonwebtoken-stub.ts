const browserOnlyMessage =
    "ReferralExchangeJwtClient is only supported in Node.js environments. " +
    "The browser build intentionally excludes the jsonwebtoken dependency.";

interface JsonWebTokenStub {
    sign: () => never;
}

const jsonwebtokenStub: JsonWebTokenStub = {
    sign() {
        throw new Error(browserOnlyMessage);
    },
};

export default jsonwebtokenStub;
