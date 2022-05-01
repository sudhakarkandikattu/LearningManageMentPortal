const LocalStorageServices = (() => {
    const tokenObjName = 'jwtToken';
    const visitorIdObjName = 'visitorId';
    const ssoAccessToken = 'accessToken';

    const _getTokenItems = () => {
        const token = localStorage.getItem(tokenObjName);
        return JSON.parse(token)
    };

    const _setToken = (tokenObj) => {
        localStorage.setItem(tokenObjName, tokenObj);
    };

    const _getAccessToken = () => {
        const tokenItems = _getTokenItems();
        return tokenItems ? tokenItems.value : null;
    };
    const _getSsoAccessToken = () => {
        return localStorage.getItem(ssoAccessToken) || null;
    };

    const _getRefreshToken = () => {
        const tokenItems = _getTokenItems();
        return tokenItems ? tokenItems.refresh : null;
    };

    const _getTokenExpirationTime = () => {
        const tokenItems = _getTokenItems();
        return tokenItems ? tokenItems.expiry : null;
    };

    const _clearToken = () => {
        localStorage.removeItem(tokenObjName);
    };

    const _getVisitorId = () => {
        return localStorage.getItem(visitorIdObjName);
    }

    const _setVisitorId = (visitorId) => {
        localStorage.setItem(visitorIdObjName, visitorId);
    };

    return {
        setToken: _setToken,
        getAccessToken: _getAccessToken,
        getSSOAccessToken: _getSsoAccessToken,
        getRefreshToken: _getRefreshToken,
        getTokenExpirationTime: _getTokenExpirationTime,
        clearToken: _clearToken,
        getVisitorId: _getVisitorId,
        setVisitorId: _setVisitorId,
    };
})();

export default LocalStorageServices;
