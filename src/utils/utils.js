const {getStatuses} = require("./storageHandler");
const rightPad = (str, fullLength) => {
    let paddedStr = str;
    while (paddedStr.length < fullLength) {
        paddedStr += " ";
    }
    return paddedStr;
};

const getShortUsername = () => {
    const {ATLASSIAN_USERNAME} = process.env;
    return ATLASSIAN_USERNAME.substring(0, ATLASSIAN_USERNAME.indexOf("@"));
};

const getStatusForSlug = slug => {
    const statuses = getStatuses();
    for (const status of statuses) {
        if (getSlugForStatus(status).startsWith(slug)) {
            return status;
        }
    }
    throw Error("unknown status slug");
};

const getSlugForStatus = status => {
    // lowercase, alphanumeric
    return status.replace(/\W/g, "").toLowerCase();
};

module.exports = {
    rightPad,
    getShortUsername,
    getStatusForSlug,
    getSlugForStatus,
};
