import { rest } from 'msw';

export const handlers = [
    rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
        return res(
            ctx.json([
                {
                    name: 'Chocolate',
                    price: '$1.00',
                    id: 1,
                    imagePath: '/images/chocolate.png',
                },
                {
                    name: 'Vanilla',
                    price: '$1.00',
                    id: 1,
                    imagePath: '/images/vanilla.png',
                },
            ])
        );
    }),
];
