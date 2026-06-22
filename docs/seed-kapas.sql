-- Example case study: The Kapas. Run after case-study-fields.sql
insert into projects (
  title, slug, category, year, timeline, gradient, image, tags,
  live_url, github_url, description, client_intro, services, project_types,
  outcome, deliverables, display_order
) values (
  'The Digital Overhaul of The Kapas',
  'the-kapas',
  'Digital Marketing',
  '2022',
  '1 Year',
  'from-rose-600 via-pink-600 to-purple-600',
  'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
  array['Social Media','Paid Ads','E-commerce','Branding'],
  '#', '#',
  'A full digital overhaul for a Jaipur women''s apparel brand — social, paid, and e-commerce.',
  E'The Kapas is a women''s apparel and accessories brand hailing from Jaipur that boasts a wide range of ethnic and western outfits that are renowned for their exceptional design, top-quality raw materials, and superior look.\n\nThe brand has received numerous orders from a strong customer base spanning the globe. To ensure that The Kapas maintains its status as a leading women''s apparel brand, we implemented a strategic digital marketing plan.',
  array['Social Media Marketing','Consultancy & Strategy','Paid Media','Web Maintenance'],
  array['Online Presence & Sales'],
  E'We built Kapas'' digital presence by embracing e-commerce, eye-catching photoshoots, strong community building, and compelling social media content. Our conversion-focused campaigns and targeted paid strategies elevated Kapas'' reputation in the fashion industry.\n\nThe Kapas came to us with barely 130 Pinterest and 950 Instagram followers. With our digital marketing, they gained 22,840 Pinterest followers and 9,906 on Instagram in just a year.\n\nThe ultimate marketing objective would be to boost orders, and we are proud to say that we took apparel orders at the Kapas to new heights — starting from 87 orders in the year''s first month and reaching a whopping 1276 orders by the midpoint of 2022.',
  array['Content','Website','Printing','Photoshoot','Creatives','Social Media','Paid Ads','E-mail Marketing','Influencer Marketing','Advertising Campaigns'],
  100
)
on conflict (slug) do nothing;
