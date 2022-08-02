function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select(".post-title").text(),
        cover: doc.select(".summary_image img").first().attr('data-src'),
        description: doc.select(".dsct").text(),
        detail: doc.select(".post-status").html(),
        category: doc.select(".genres-content").html(),
        host: "https://manhuarock.net"
    });
}