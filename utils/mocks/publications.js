const publicationsMock = [
  {
    id: "cffb0a3e-7a91-466c-af8f-ada714372c75",
    title:
      "ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet",
    description:
      "quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce",
    likes: 12,
    shares: 10,
    user: { name: "Jehu Braley", username: "jbraley0" },
    categories: [{ title: "Thefts" }],
    createdAt: "17/12/2018"
  },
  {
    id: "1da76822-9388-4801-af25-495b3587f342",
    title:
      "rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio",
    description:
      "imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis",
    likes: 2,
    shares: 5,
    user: { name: "Stirling Duffield", username: "sduffield1" },
    categories: [{ title: "Thefts" }],
    createdAt: "11/11/2018"
  },
  {
    id: "d5990a83-7d49-424c-9ee2-0856968ac4e0",
    title:
      "dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus",
    description:
      "et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus",
    likes: 11,
    shares: 2,
    user: { name: "Gonzalo Fasse", username: "gfasse2" },
    categories: [
      { title: "Thefts" },
      { title: "Accidents" },
      { title: "Homicides" }
    ],
    createdAt: "15/01/2019"
  },
  {
    id: "f371438d-05a9-4dea-918b-1683abbbb26d",
    title:
      "nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi",
    description:
      "morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus",
    likes: 9,
    shares: 7,
    user: { name: "Johnette Cotter", username: "jcotter3" },
    categories: [{ title: "Thefts" }],
    createdAt: "31/10/2019"
  },
  {
    id: "4e701316-3958-466c-9d0b-1937b8c0a3f4",
    title: "nunc purus phasellus in felis donec semper sapien a libero nam dui",
    description:
      "sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis",
    likes: 7,
    shares: 5,
    user: { name: "Nikki Walklott", username: "nwalklott4" },
    categories: [{ title: "Thefts" }],
    createdAt: "16/11/2018"
  },
  {
    id: "63284dc2-6846-464d-be91-449cf01a613e",
    title: "ante vestibulum ante ipsum primis in faucibus orci luctus et",
    description:
      "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh",
    likes: 11,
    shares: 5,
    user: { name: "Lilyan Eastcourt", username: "leastcourt5" },
    categories: [{ title: "Thefts" }],
    createdAt: "08/07/2019"
  },
  {
    id: "a0eade67-7970-4c00-a4fd-b5983df97c01",
    title:
      "turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec",
    description:
      "neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec",
    likes: 2,
    shares: 6,
    user: { name: "Julianne Hinemoor", username: "jhinemoor6" },
    categories: [
      { title: "Thefts" },
      { title: "Accidents" },
      { title: "Homicides" }
    ],
    createdAt: "01/08/2019"
  },
  {
    id: "d5fb4691-7ed0-4e2e-be05-b1e22427185a",
    title:
      "non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel",
    description:
      "adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non",
    likes: 8,
    shares: 4,
    user: { name: "Gunar Sixsmith", username: "gsixsmith7" },
    categories: [{ title: "Thefts" }],
    createdAt: "31/03/2019"
  },
  {
    id: "fdd8927d-fbb4-4521-a35c-6309bcd36f4f",
    title:
      "sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam",
    description:
      "morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet",
    likes: 8,
    shares: 5,
    user: { name: "Hinda Andreichik", username: "handreichik8" },
    categories: [{ title: "Thefts" }, { title: "Accidents" }],
    createdAt: "10/12/2018"
  },
  {
    id: "e1458d62-6941-4975-b068-2e38d30514e9",
    title:
      "mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis",
    description:
      "a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit",
    likes: 8,
    shares: 10,
    user: { name: "Peggie Newiss", username: "pnewiss9" },
    categories: [{ title: "Thefts" }],
    createdAt: "09/02/2019"
  }
];

module.exports = {
  publicationsMock
};
