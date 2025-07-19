import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  standalone: false,
})
export class EventsComponent implements OnInit, AfterViewInit { // Implement AfterViewInit
  eventName: string = "Sermon On The Mount 2025";
  eventTheme: string = "Let Your Light So Shine";
  themeScripture: string = "Matthew 5:16";
  eventHosts: string[] = [
    "Pastor Bernard Bafoe (Host)",
    "Shepherd Gideon Katibor",
    "Oliver Benedict Essel"
  ];
  eventDate: string = "10th - 12th October 2025";
  eventTime: string = "10:00 AM Daily";
  eventVenue: string = "Global Retreat Center, McCarthy Valley, Accra";

  sermonOnTheMountDescription: string = `
    Sermon On The Mount is the annual gathering of the people of God across the cities, regions, the nations of the world, and the continents of the globe unto the mountain of the LORD'S house.
    SOM is in line with an end time prophecy as prophesied in Micah 4:2 and Isaiah 2:2-5 when the LORD said, "and it shall come to pass in the last days that the mountain of the LORD'S house shall be established in the top of the mountains, and shall be exalted above the hills; and all the nations shall flow unto it. And many people shall go and say, Come ye and let's go up to the mountain of the LORD, to the house of the God of Jacob; and he will teach us his ways, and we will walk in his paths: for out of Zion shall go forth the law, and the word of the LORD from Jerusalem. And he shall judge among the nations, and shall rebuke many people: and they shall beat their swords into plowshares, and their spears into pruning hooks: nation shall not lift up sword against nation, neither shall they learn war anymore. Oh house of Jacob, come ye, and let us walk in the light of the LORD.
    Sermon On The Mount is a mountain of REVELATION and LIGHT, where God will reveal unto His people His ancient ways and give them light for dominion.
    Sermon On The Mount is a mountain of DIRECTIONS and INSTRUCTIONS, where God will direct and instruct His people to walk after His ways and patterns.
    Sermon On The Mount is a mountain of JUDGEMENT, where God judges the matters of the saints and nations and brings verdict on darkness and Satan.
    Sermon On The Mount is also in alignment with the teachings of the Kingdom and its manifestation by the Lord Jesus Christ as revealed in the gospels. According to the gospels of Matthew, Mark, Luke, and John, Jesus camped the people of old for days as he taught and manifested the possibilities of the Kingdom of God. As such is what he does during Sermon On The Mount.
    Sermon On The Mount again is a mountain of the teaching of the Kingdom as Jesus takes us through the deepness of the Kingdom of God in word and deed.
    Sermon On The Mount is a mountain of signs, wonders, and miracles. In Luke 6:17, 18, and 19, on the mountain, sicknesses were healed, oppressions were terminated, the dumb heard, the blind saw, dead raised back to life, and all manner of miracles did Jesus do. As such is what he does on the Sermon On The Mount.

    In summary, Sermon On The Mount is the Mountain of the LORD'S house where He becomes our God and we, His people; where He becomes our Father and we, His children.
  `;

  @ViewChildren('animatedElement')
  animatedElements!: QueryList<ElementRef>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initIntersectionObserver();
  }

  initIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    this.animatedElements.forEach(element => {
      observer.observe(element.nativeElement);
    });
  }

  /**
   * Redirects the user to the Google Form for registration.
   */
  registerForEvent(): void {
    window.open('https://forms.gle/5gX22zAbkdpY2zcQ8', '_blank');
  }
}
