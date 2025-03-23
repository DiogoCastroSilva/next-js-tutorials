const { SPACE_FLIGHT_NEWS_API_URL } = process.env;

export async function GET() {
  try {
    const reply = await fetch(
      `${SPACE_FLIGHT_NEWS_API_URL}/articles/?limit=20&news_site=Arstechnica%2CTeslarati%2CElonX%2CThe%20Launch%20Pad%2CCNBC%2CNASASpaceflight`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!reply.ok) {
      throw new Error(reply.statusText);
    }

    const data = await reply.json();

    if (!data.results) {
      throw new Error('No results found');
    }

    return new Response(JSON.stringify(data.results), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.log(error);

    return new Response(JSON.stringify(error), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
