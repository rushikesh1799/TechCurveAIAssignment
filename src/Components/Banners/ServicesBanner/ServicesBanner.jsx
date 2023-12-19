import React from "react";
import "./ServicesBanner.css";
import ServicesItem from "./ServicesItem";

const servicesData = [
    {
        id: 1,
        img: "https://s3-alpha-sig.figma.com/img/3044/5c8a/d6754b48b8baaffe1548c560718d9382?Expires=1704067200&Signature=IR3MglbpOjh3OW4GJSFYMZURnZrIeEZ3OHyJfRUY0q0rWygGZX~waFlvD0TE1c6qH31I9sxAbbPp-3AsSF8jN4ieaiNAYmx5FXLYXnQUJ~9lxFwdmhtSwI9tRlp-gVhQRaKcT8RA9~WmB4hxb~kLYAnazMvo9sfnkTDFgwF8yveTwpN9MwqyPiNMfsBzDxLRApV9VL03bHN-88SJcyieIrXkl63gXTHGs7uwSYB2qZ9sRWIoDztvmCPcvSHP3vF1RR~E6Dnd4OicxuYKnmf9Lvg~qqqCXnNCThMsgA-Bt7CFtZrfG0wUGbq4PqrMxR5l8NyaAm1p8I42srnKf0hQkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        serviceName: "15000+ Softwares",
    },
    {
        id: 2,
        img: "https://s3-alpha-sig.figma.com/img/98c0/b801/168cfcbb48ac42aeb9a472b638d2889f?Expires=1704067200&Signature=oJ48OKNC-bOtrP7rSLArVHUjXBWy7VFYmSU9-wM2E-jp-EgHAcCfHvIha2uWHnJ5ro-ZZt6btQPdACbXr2uEMQOjTm2TNhJnYA1n2OjdEAnumkrOPLYodtOETvNKCsAkUPCljmVMKCwwCecaYm3CDCVaB4S-z1A645WTeUSD5jqrWoFx7JdVaAyjrKbomG0BUwmFx8z1PgjXbnp7ER~hJpAp8Yvl2OTG59gvRujht5zQs9Mox0U~qrATT~Kr2fmtp0qJm7JkimhZFTsu2HF4KorHHR40mrUlrdfLdfOycYYbZIiJ7Nixy31mygI026zZKV6Bg2Da0c-gajMn9UKdgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        serviceName: "Best Price Guaranteed",
    },
    {
        id: 3,
        img: "https://s3-alpha-sig.figma.com/img/da11/bc54/4c3eb2651618401cd3ebb54adf014555?Expires=1704067200&Signature=Qr8w1mjEHoL5F8mBHp2utjl95kq2yeLG23pVDaQk6kC7G9VoQcmbRn3DkCGc-mulEptdfm6U1O8aBFmrrTuCIlYMq~uZHhrjaRJkcwD-yzwHWAT32BII30Vi89zLtueBbI8lJrvG1ke3TulLDraWH0fpwKCX-9eJhIe~CJzr7VnXx63nWlYuWUdzPLdjteXwwatHlT8b3zMmBQFYOLOd46VqrLpaZkx1ctvVUn4~gn5JNXV649vHB-6waIxAa7byQKOvvmm3Q0Wtht3nreBXbuupugX69x5an50hH6zhViKt82T907DC5-6r4o2B1auuvWrfv~S7enmaD5pOIZhqbg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        serviceName: "Free Expert Consultation",
    },
];

function ServicesBanner() {
    return (
        <div className="product-banner-wrapper">
            {servicesData.map((service) => (
                <ServicesItem service={service} key={service.id} />
            ))}
        </div>
    );
}

export default ServicesBanner;
