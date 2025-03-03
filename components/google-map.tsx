export function GoogleMaps() {
    return (
        <section className="container mx-auto lg:px-16 md:px-8 px-4 py-16 h-full">
            <h2 className="mb-8 text-center text-3xl font-bold">Find Us</h2>
            <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3887.881899100784!2d77.6208384!3d12.9794048!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDE3JzEzLjEiTiA3MMKwMjAnMTQuOSJF!5e0!3m2!1sen!2sin!4v1740584875769!5m2!1sen!2sin"
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
