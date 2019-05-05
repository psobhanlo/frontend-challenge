export default function loadData({skipped = 0, size = 20} = {}) {
    const items = Array(size);
    for (let index = 0; index < size; index++) {
        const status =
            Math.floor(Math.random() * 3) === 0
                ? {
                    title: "آگهی نشده",
                    advertised: 0
                }
                : {
                    title: "آگهی شده",
                    advertised: 1
                };
        items[index] = {
            id: index,
            human_readable_id: Math.random()
                .toString(36)
                .substring(7),
            status,
            title: `۲۰۱۸٬ هیدوندای٬ سانتافه (${Math.random()
                .toString(36)
                .substring(7)})`,
            image: Math.ceil(Math.random() * 3) + ".png",
            price: {
                slug: "price",
                value: Math.floor(Math.random() * 90071992547),
                unit: "تومان"
            },
            created_at: 1555235671000
        };
    }
    return new Promise(resolve => {
        setTimeout(
            () =>
                resolve({
                    total: 2000,
                    size: 20,
                    skipped,
                    items
                }),
            3000
        );
    });
}