import React from "react";
import DealProductItem from "./DealProductItem";

const dealProducts = [
    {
        id: 1,
        img: "https://s3-alpha-sig.figma.com/img/36f4/aacf/e12d8dc7aa9ec7021452da7067fa555c?Expires=1703462400&Signature=bozKD535izje0y6tXqjaFjEKTRH6OtOwST5D7mKvn0uHMNnx60JZSosL4OTremmQXSeSL2oFHF9-WCAHgjAjq2Mr8qKFxfDTM~p~LzzcNYwYTPDt3PVGwlxu3PR0-zudsezuNyTfD3DXk4jWQo-us9dLsIYHCtvwKYSQy7eWFnic3xULp1-NZsf~NBxpIlJhtvlEl1RG4CVm8M8bX16TIdOT~JQ2eDVlyv1-~lt5CZgaLuVFVsahuC1aQXbZpmJQ~kz30Idjt8~eXQq~VvTqFXndn1pRwrRdsLoa52nrkto7JqjEh~7lDibVo7ob7SdJx5RUy4sDentHzIv0H06XKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        productName: "Atlas Mapping",
    },
    {
        id: 2,
        img: "https://s3-alpha-sig.figma.com/img/c2da/2a9a/704006504fc5364d4b154dfdd0d710f9?Expires=1703462400&Signature=l4HH7RbmD9dGr2WFNjyjB3BTGYsqbM2zyTzGPPWUA2bD~XNHxdahuZXrVkmbaDHDWxOZOL61yllc7bubniEgu3un8ngQ1VviIbQ1Fs0ssPwCiVxK~9rtLLrwuVgBTKy3nHy~81Ab7GEbF-SHC7eSgJVTgcLr-kL0HHHHrV5n0OovUp8PkMU379QjDvAJDqHmPAZCXho-4I1nlKux5SJLSHxH8-SHLxqkcU2eAmWyjSsw0yTRvDGGWASdHtUJHNZqbdq3KYVKTHV92TgOrfKad6xsyB1dl8Gz0AHIGeW68NkvMSl9VvLbeFrc4gspyiVKl5Q8TYBFMIBgk4XXsIL8GQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        productName: "Acronis",
    },
    {
        id: 3,
        img: "https://s3-alpha-sig.figma.com/img/d78a/0529/7bb5f73fa084362b08d6ad6ff1c9adad?Expires=1703462400&Signature=qsL7BH3EncFhXaNatQXY37EIM9ur6UgHUJvfC3p1nX6mzxJ~ya2Tcp9PKqPF2c8dNtCa0UV0GSPgZ4hRjRKg5S5Pk-o7fyurYknNYIrFo9WYB89Y0f4syOwqOArMG6crg0y2b3jIGaBVaSOfgb-wf2ZJRLBLIkP9FeatAZ~FZGbYXYCD~GYrDosyfD7gw15hG8pG5aDI3aRej52uwcZ4fniyYZiNMh4uVLFLSNtMvc6hGhxeCHMTnyKGTBzbk~zGQk0Nm5cAclGXPuE5BhEgbYrIkzduoPMIvNNv33sncNq~NouzPW5V9hXvNpJ0ETRUyPUc4GX0BS3ZrSvHZA8AXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        productName: "Acronis",
    },
    {
        id: 4,
        img: "https://s3-alpha-sig.figma.com/img/c5b3/e18d/bdc95abbe7beed27b789dbe9c125314a?Expires=1703462400&Signature=Ch8y~E9NsOiDVZEkCyRmAstYUqZXr0JesjV6kScQ9EPr4kVwtXw4uYure~hfwgh6IbXtWJhZYe8nPC2JFstz97jQf8Yj5LmWF7FoL1-kuRyGVrIo6WyGBnJUc~dd77JhxsY0dCIneGcDy27p5Br715VKnz-het6kgVFmGxyKMo2yEWA74hQSLNWUYA2PAdzsqh6QLzHC5puZvpmro~qMTtoyunYRrrSEJ3RBmVl6xCoMq9EhTnZPb1-W8Jzi7NV3n4q0C6w9Dz81edF8Oiz1-Q~D-vnWT0I5Cs-nv-PJOlmlrAxqxY~uYaS7sKr1fPotiyQN7ox0bq3UJcLMxxHSOw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        productName: "Acronis",
    },
    {
        id: 5,
        img: "https://s3-alpha-sig.figma.com/img/8cf5/dcfb/2e8da3bced3d21289e7ced462b77fa1e?Expires=1703462400&Signature=RbyIAnWMyBMmyI4xcfS4PhkmQnDEsJMgFI4IJ1vjHgd7qKZ9sYYCFbD29vJQxLKDPDoizx6m2qpCL5bjKFxWPemTPzak0b0EcThUoQuYBVKr0lU76EWr8OjDfWbNvJgd~Rj9jIDwnDDV1m-ylFPYBSJ14VlbpsnYPpz26BgvRYQUTWew~jrYYCvS1~qOTJqA6s8GzE~3fWKoFa5lKwIrcBdxChC2018rHzjN9sGuUXXjuiWw7fhjobBDU0POPUEfV6wch77PndVMJJ1FE7VlfPNxbAlUp545gVZgfsV9i9HNxW7JC1rvFmhzpEZ38tB1L6lr256UuRPo7PHKBNJO0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        productName: "Acronis",
    },
];

function DealsData() {
    return (
        <div className="deals-data-wrapper">
            {dealProducts.map((product) => (
                <DealProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}

export default DealsData;
