export function fetchCatImages() {
    const valid_status_codes = [
        100, 101, 102, 103, 200, 201, 202, 203, 204, 205, 206, 207, 208, 300,
        301, 302, 303, 304, 305, 307, 308, 400, 401, 402, 403, 404, 405, 406,
        407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 420, 421,
        422, 423, 424, 425, 426, 428, 429, 431, 444, 450, 451, 497, 498, 499,
        500, 501, 502, 503, 504, 506, 507, 508, 509, 510, 511, 521, 522, 523,
        525, 530, 599,
    ];
    const generateRandomStatusCodes = () => {
        const status_codes = [];
        while (status_codes.length < 9) {
            const random_index = Math.floor(
                Math.random() * valid_status_codes.length
            );
            const code = valid_status_codes[random_index];
            if (!status_codes.includes(code)) {
                status_codes.push(code);
            }
        }
        return status_codes;
    };
    const random_status_codes = generateRandomStatusCodes();
    const cat_image_URLs = random_status_codes.map(
        (code) => `https://http.cat/${code}`
    );

    return cat_image_URLs;
}