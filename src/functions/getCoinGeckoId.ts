/** Extracts Coingecko ID from the URL. */
export function getCoinGeckoId(geckoUrl: string): null | string {
    geckoUrl = geckoUrl.trim();

    try {
        const url = new URL(geckoUrl);
        if (url.host == 'coingecko.com') {
            const [coinsPath, coinId] = url.pathname.split('/').slice(1, 3);

            if (coinsPath === 'coins' && coinId.length > 0) {
                return coinId;
            } else {
                return null;
            }
        } else {
            return null;
        }
    } catch {
        return null;
    }
}
