let stringLimiter = (id, str, limit) => {
    let string = document.getElementById(id);
    if (str.length > limit) {
        return str.slice(0, limit) + "...";
    }
    return str;
};