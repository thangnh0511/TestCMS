const { Client } = require('@notionhq/client');

const {NOTION_KEY, NOTION_DB} = process.env;

const notion = new Client({ auth: NOTION_KEY });


exports.handler = async function(event, context) {
    try {
        const response = await notion.databases.query({
            database_id: NOTION_DB,
            filter: {
                property: 'Status',
                status: {
                equals: 'Live'
                }
            }
            ,
            });
        return {
        statusCode: 200,
        body: JSON.stringify(response)
        };
    } catch (e) {
        console.error(e)
        return {
            statusCode: 500,
            body: e.toString(),
        }
    }
  };