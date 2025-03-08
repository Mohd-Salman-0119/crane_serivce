export function GoogleMaps() {
    return (
        <section className="container mx-auto lg:px-16 md:px-8 px-4 py-16 h-full">
            <h2 className="mb-8 text-center text-3xl font-bold">Find Us</h2>
            <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3664.786204296322!2d70.33256408148632!3d23.287216924814146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDE3JzE0LjAiTiA3MMKwMjAnMTQuOCJF!5e0!3m2!1sen!2sin!4v1741458586830!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    )
}
