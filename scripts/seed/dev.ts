import db, { genId } from '../../src/modules/db'

const run = async () => {
    await db.post.createMany({
        data: [
            {
                id: genId(),
                slug: 'hello stack',
                title: 'hello title',
                publishedAt: new Date(),
            },
            {
                id: genId(),
                slug: 'bye stack',
                title: 'bye title',
            }
        ]
    })
}

if (require.main === module) {
    run().then(() => {
        console.log('Data seed complete')
        process.exit()
    })
}