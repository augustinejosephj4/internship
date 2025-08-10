import { Component } from '@angular/core';
import { Card } from "../../common/card/card";

@Component({
  selector: 'app-districts',
  imports: [Card],
  templateUrl: './districts.html',
  styleUrl: './districts.css'
})
export class Districts {
districts = [
  { id: 1, title: 'Thiruvananthapuram', description: 'The capital city of Kerala, known for its rich history and cultural heritage.', image: 'https://irisholidays.com/keralatourism/wp-content/uploads/2021/10/Tourist-places-in-trivandrum.jpg' },
  { id: 2, title: 'Ernakulam', description: 'A bustling city and commercial hub, famous for its backwaters and hill stations.', image: 'https://th.bing.com/th/id/OIP.iJv4yvKD5SiKz8BtOMnXLAHaD4?w=337&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
  { id: 3, title: 'Alappuzha', description: 'Known for its scenic backwaters, houseboat cruises, and coir industry.', image: 'https://wallpapercave.com/wp/wp7877384.jpg' },
  { id: 4, title: 'Kollam', description: 'Famous for its cashew processing, Ashtamudi Lake, and historic port.', image: 'https://c8.alamy.com/comp/2CA92TT/view-of-kollam-harbour-and-beach-kollam-kerala-india-asia-2CA92TT.jpg' },
  { id: 5, title: 'Kottayam', description: 'Renowned for its rubber plantations, literacy, and publishing industry.', image: 'https://2.bp.blogspot.com/-ycIdQ2dnefM/VslZ6t43WjI/AAAAAAAAFAE/hTdnlJtTrgo/s1600/7.jpg' },
  { id: 6, title: 'Idukki', description: 'High-range district with wildlife sanctuaries, dams, and spice plantations.', image: 'https://static.theprint.in/wp-content/uploads/2018/08/2018_8img10_Aug_2018_PTI8_10_2018_000227B.jpg' },
  { id: 7, title: 'Wayanad', description: 'Hilly and forested region, known for trekking, tribal culture, and wildlife.', image: 'https://c2.staticflickr.com/8/7220/7286755596_8112395b76_k.jpg' },
  { id: 8, title: 'Kannur', description: 'Coastal district with rich cultural heritage, theyyam performances and looms.', image: 'https://th.bing.com/th/id/OIP.a_x3ZQ58UKW31SxdKJXKsQHaFj?w=249&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
  { id: 9, title: 'Kasaragod', description: 'Northernmost district; known for its temples, cultural diversity and coir industry.', image: 'https://th.bing.com/th/id/R.41f01df3adebd3462eb4b4e040785160?rik=PJp2uetyn%2fWdYw&riu=http%3a%2f%2fnorthkeralatourpackages.com%2fwp-content%2fuploads%2f2017%2f10%2fh2-Kasaragod.jpg&ehk=ryiaxgTty5iVrZcU5Ufk4Fm07xD9VxiRsjOi9tj8IYk%3d&risl=&pid=ImgRaw&r=0' },
  { id: 10, title: 'Palakkad', description: 'The “Granary of Kerala”, gateway to the state via Palakkad Gap.', image: 'https://www.paradise-kerala.com/blog/wp-content/uploads/2022/11/26677079964_fac640c391_b.jpg' },
  { id: 11, title: 'Malappuram', description: 'One of the largest districts, known for its rich Muslim heritage and hills.', image: 'https://tse1.mm.bing.net/th/id/OIP.JvKIq4U3MAkotxrJreA5XgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: 12, title: 'Thrissur', description: 'Cultural capital of Kerala, known for festivals and temples.', image: 'https://www.treebo.com/blog/wp-content/uploads/2019/12/Thrissur-Pooram-Festival.jpg' },
  { id: 13, title: 'Palakkad', description: 'Gateway to Kerala via mountain pass; large agricultural belt.', image: 'https://www.paradise-kerala.com/blog/wp-content/uploads/2022/11/26677079964_fac640c391_b.jpg' },
  { id: 14, title: 'Pathanamthitta', description: 'Pilgrimage hub, home to Sabarimala and scenic environmental landscape.', image: 'https://keralatourism.travel/images/destinations/places-to-visit/pathanamthitta/aranmula-pathanamthitta-kerala-tourism-entry-fee-timings-holidays-reviews-header-small.jpg' }
];

}
