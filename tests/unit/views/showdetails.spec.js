import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import ShowDetailsComponent from '@/views/ShowDetails.vue';
import VueRouter from 'vue-router'
import { routes } from '@/router/index.js'

describe('Details of the particular show', () => {
  let showDetailsWrapper;
  let localVue;
  let mockStore;
  const router = new VueRouter({routes})
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(VueRouter);
    mockStore = {
      state: {
       "showData":  
       {
        "id":1,
        "url":"http://www.tvmaze.com/shows/1/under-the-dome",
        "name":"Under the Dome",
        "type":"Scripted",
        "language":"English",
        "genres":["Drama","Science-Fiction","Thriller"],
        "status":"Ended","runtime":60,"premiered":"2013-06-24",
        "officialSite":"http://www.cbs.com/shows/under-the-dome/",
        "schedule":{"time":"22:00","days":["Thursday"]},
        "rating":{"average":6.5},
        "weight":97,
        "network":
        {
          "id":2,
          "name":"CBS",
          "country":
          {
            "name":"United States",
            "code":"US",
            "timezone":"America/New_York"
          }
        },
        "webChannel":null,
        "externals":
        {
          "tvrage":25988,
          "thetvdb":264492,
          "imdb":"tt1553656"
        },
        "image":{
          "medium":"http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
          "original":"http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
        },
        "summary":"<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
        "updated":1573667713,
        "_links":
        {
          "self":
          {
            "href":"http://api.tvmaze.com/shows/1"
          },
          "previousepisode":
          {
            "href":"http://api.tvmaze.com/episodes/185054"
          }
        }
      },
      "seasonEpisodeDetails": [{"id":167,"url":"http://www.tvmaze.com/episodes/167/true-detective-1x01-the-long-bright-dark","name":"The Long Bright Dark","season":1,"number":1,"type":"regular","airdate":"2014-01-12","airtime":"21:00","airstamp":"2014-01-13T02:00:00+00:00","runtime":60,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/8/21961.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/8/21961.jpg"},"summary":"<p>Former Louisiana State CID partners Martin Hart and Rustin Cohle give separate statements to a pair of investigators about the murder of a prostitute, Dora Lange, 17 years earlier. As they look back, details of the crime, replete with occult overtones, are accompanied by insights into the detectives' volatile partnership and personal lives.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/167"}}},{"id":168,"url":"http://www.tvmaze.com/episodes/168/true-detective-1x02-seeing-things","name":"Seeing Things","season":1,"number":2,"type":"regular","airdate":"2014-01-19","airtime":"21:00","airstamp":"2014-01-20T02:00:00+00:00","runtime":60,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/8/21962.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/8/21962.jpg"},"summary":"<p>Under pressure to land a suspect in the Lange murder, Quesada warns Hart and Cohle that they might be replaced by three detectives from a new task force. The pair lobbies for extra time to follow up on a lead that takes them from a rural cathouse to an incinerated church. With his marriage to Maggie already strained by work, Hart finds respite away from home.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/168"}}},{"id":169,"url":"http://www.tvmaze.com/episodes/169/true-detective-1x03-the-locked-room","name":"The Locked Room","season":1,"number":3,"type":"regular","airdate":"2014-01-26","airtime":"21:00","airstamp":"2014-01-27T02:00:00+00:00","runtime":60,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/8/21963.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/8/21963.jpg"},"summary":"<p>Hidden image at the burned-out church leads Cohle and Hart to Joel Theriot, a tent-revival minister whose parishioners finger a scarred \"tall man\" seen with Dora Lange. Brought in for interrogation, a sex offender matching the description is quickly dismissed by Cohle, despite offering a confession. Hart gets sidetracked after Maggie sets Cohle up with a friend at a C&amp;W bar. Looking to establish a pattern of murder, Cohle pores over old case files, finding a connection with a woman assumed to have drowned years earlier.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/169"}}},{"id":170,"url":"http://www.tvmaze.com/episodes/170/true-detective-1x04-who-goes-there","name":"Who Goes There","season":1,"number":4,"type":"regular","airdate":"2014-02-09","airtime":"21:00","airstamp":"2014-02-10T02:00:00+00:00","runtime":60,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/8/21964.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/8/21964.jpg"},"summary":"<p>Hart and Cohl follow a series of dangerous leads in an effort to locate prime suspect Reggie Ledoux.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/170"}}},{"id":171,"url":"http://www.tvmaze.com/episodes/171/true-detective-1x05-the-secret-fate-of-all-life","name":"The Secret Fate of All Life","season":1,"number":5,"type":"regular","airdate":"2014-02-16","airtime":"21:00","airstamp":"2014-02-17T02:00:00+00:00","runtime":60,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/8/21965.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/8/21965.jpg"},"summary":"<p>Hart and Cohle share the spoils of a solved case; Papania and Gilbough confront the detectives with troubling new intelligence.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/171"}}},{"id":172,"url":"http://www.tvmaze.com/episodes/172/true-detective-1x06-haunted-houses","name":"Haunted Houses","season":1,"number":6,"type":"regular","airdate":"2014-02-23","airtime":"21:00","airstamp":"2014-02-24T02:00:00+00:00","runtime":60,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/8/21966.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/8/21966.jpg"},"summary":"<p>Maggie sheds light on Cohle's activities in 2002, when his relationship with Hart fractured and he quit the force.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/172"}}},{"id":173,"url":"http://www.tvmaze.com/episodes/173/true-detective-1x07-after-youve-gone","name":"After You've Gone","season":1,"number":7,"type":"regular","airdate":"2014-03-02","airtime":"21:00","airstamp":"2014-03-03T02:00:00+00:00","runtime":60,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/8/22086.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/8/22086.jpg"},"summary":"<p>Hart and Cohle forge a truce to probe a murky string of disappearances that tie to the symbology of the Dora Lange murder and the Tuttle family.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/173"}}},{"id":174,"url":"http://www.tvmaze.com/episodes/174/true-detective-1x08-form-and-void","name":"Form and Void","season":1,"number":8,"type":"regular","airdate":"2014-03-09","airtime":"21:00","airstamp":"2014-03-10T01:00:00+00:00","runtime":60,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/8/22089.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/8/22089.jpg"},"summary":"<p>An overlooked detail provides Hart and Cohle with an important new lead in their 17-year-old case.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/174"}}},{"id":1785579,"url":"http://www.tvmaze.com/episodes/1785579/true-detective-s01-special-making-true-detective","name":"Making True Detective","season":1,"number":null,"type":"insignificant_special","airdate":"2014-01-07","airtime":"","airstamp":"2014-01-07T17:00:00+00:00","runtime":12,"image":null,"summary":"<p>HBO's making of True Detective, a crime drama centered around two Louisiana State PD detectives, and their 17-year hunt for a ritual killer, starring Matthew McConaughey and Woody Harrelson.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/1785579"}}}],
      "showSeasonDetails": [{"id":307,"url":"http://www.tvmaze.com/seasons/307/game-of-thrones-season-1","number":1,"name":"","episodeOrder":10,"premiereDate":"2011-04-17","endDate":"2011-06-19","network":{"id":8,"name":"HBO","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/24/60659.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/24/60659.jpg"},"summary":"<p>Lord Eddard Stark is asked by his old friend, King Robert Baratheon, to serve as the King's Hand following the death of the previous incumbent, Eddard's mentor Jon Arryn. Eddard is reluctant, but receives intelligence suggesting that Jon was murdered. Eddard accepts Robert's offer, planning to use his position and authority to investigate the alleged murder.</p>","_links":{"self":{"href":"http://api.tvmaze.com/seasons/307"}}},{"id":308,"url":"http://www.tvmaze.com/seasons/308/game-of-thrones-season-2","number":2,"name":"","episodeOrder":10,"premiereDate":"2012-04-01","endDate":"2012-06-03","network":{"id":8,"name":"HBO","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/24/60660.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/24/60660.jpg"},"summary":"<p>The Seven Kingdoms are at war, with the King in the North, Robb Stark, fighting to win independence for his people and those of the Riverlands. Robb decides that he must win the allegiance of the fiercely independent ironborn to his cause, and sends his best friend Theon Greyjoy to treat with his father, who is hatching plans of his own. Meanwhile, Joffrey Baratheon holds the Iron Throne with the backing of the powerful House Lannister, but his uncle Renly has also claimed the throne with the support of House Tyrell, whose armies are much larger. As they struggle for the throne, Tyrion Lannister arrives in King's Landing to take matters in hand, only to face opposition from his scheming sister, Cersei, now the Queen Regent.</p>","_links":{"self":{"href":"http://api.tvmaze.com/seasons/308"}}},{"id":309,"url":"http://www.tvmaze.com/seasons/309/game-of-thrones-season-3","number":3,"name":"","episodeOrder":10,"premiereDate":"2013-03-31","endDate":"2013-06-09","network":{"id":8,"name":"HBO","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/24/60661.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/24/60661.jpg"},"summary":"<p>The Seven Kingdoms of Westeros remain gripped by civil war. Would-be king Renly Baratheon has been assassinated, altering the alliances in the war. The cruel boy-king Joffrey Baratheon has won a great victory by securing an alliance with House Tyrell, with his supporters defeating his uncle Stannis in an epic battle. Joffrey now commands the largest armies in the realm and his triumph appears inevitable.</p>","_links":{"self":{"href":"http://api.tvmaze.com/seasons/309"}}},{"id":310,"url":"http://www.tvmaze.com/seasons/310/game-of-thrones-season-4","number":4,"name":"","episodeOrder":10,"premiereDate":"2014-04-06","endDate":"2014-06-15","network":{"id":8,"name":"HBO","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/24/60662.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/24/60662.jpg"},"summary":"<p>The War of the Five Kings is drawing to a close, but new intrigues and plots are in motion, and the surviving factions must contend with enemies not only outside their ranks, but within.</p>","_links":{"self":{"href":"http://api.tvmaze.com/seasons/310"}}},{"id":5317,"url":"http://www.tvmaze.com/seasons/5317/game-of-thrones-season-5","number":5,"name":"","episodeOrder":10,"premiereDate":"2015-04-12","endDate":"2015-06-14","network":{"id":8,"name":"HBO","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/24/60663.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/24/60663.jpg"},"summary":"<p>In Meereen, the insurgent \"Sons of the Harpy\" have started to revolt against Daenerys Targaryen's regime by murdering citizens and Unsullied, also taking the life of Barristan Selmy. In order to regain peace and control, Daenerys complies with the request of re-opening the fighting pits. Tyrion Lannister arrives in Pentos along with Varys, and they begin their journey to Meereen together. They pass through Volantis, where Tyrion is abducted by Jorah Mormont, who takes him to Meereen as a way to redeem himself to Daenerys. Daenerys takes Tyrion as her advisor, but orders Jorah exiled once more. After the Sons of the Harpy mount an attack on Daenerys and her retinue at the fighting pits, Jorah saves her life. Drogon reappears and Daenerys flies away on his back. After landing for safety, Drogon rests on a hillside. Daenerys goes looking for food, only to be surrounded by Dothraki horsemen. Jorah and Daario Naharis leave to search for Daenerys, while Tyrion, Varys, Missandei, and Grey Worm remain to rule Meereen.</p>","_links":{"self":{"href":"http://api.tvmaze.com/seasons/5317"}}},{"id":7946,"url":"http://www.tvmaze.com/seasons/7946/game-of-thrones-season-6","number":6,"name":"","episodeOrder":10,"premiereDate":"2016-04-24","endDate":"2016-06-26","network":{"id":8,"name":"HBO","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/24/60664.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/24/60664.jpg"},"summary":"<p>Following the shocking developments at the conclusion of season five, including Jon Snow's bloody fate at the hands of Castle Black mutineers, Daenerys' near-demise at the fighting pits of Meereen, and Cersei's public humiliation in the streets of King's Landing, survivors from all parts of Westeros and Essos regroup to press forward, inexorably, towards their uncertain individual fates. Familiar faces will forge new alliances to bolster their strategic chances at survival, while new characters will emerge to challenge the balance of power in the east, west, north and south.</p>","_links":{"self":{"href":"http://api.tvmaze.com/seasons/7946"}}},{"id":43194,"url":"http://www.tvmaze.com/seasons/43194/game-of-thrones-season-7","number":7,"name":"","episodeOrder":7,"premiereDate":"2017-07-16","endDate":"2017-08-27","network":{"id":8,"name":"HBO","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/182/457333.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/182/457333.jpg"},"summary":null,"_links":{"self":{"href":"http://api.tvmaze.com/seasons/43194"}}},{"id":63232,"url":"http://www.tvmaze.com/seasons/63232/game-of-thrones-season-8","number":8,"name":"","episodeOrder":6,"premiereDate":"2019-04-14","endDate":"2019-05-19","network":{"id":8,"name":"HBO","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/189/473204.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/189/473204.jpg"},"summary":null,"_links":{"self":{"href":"http://api.tvmaze.com/seasons/63232"}}}]
      },
      dispatch: jest.fn(),
    };
    showDetailsWrapper = shallowMount(ShowDetailsComponent, {
      mocks: {
        $store: mockStore,
      },
      localVue,
      router
    });
  });
  afterEach(() => {
    showDetailsWrapper.destroy();
  });
  it('is a Vue instance', () => {
    expect(showDetailsWrapper.isVueInstance).toBeTruthy();
  });

  it('renders the correct markup', () => {
    expect(showDetailsWrapper.html()).toContain('container pt-50');
  });

  it('it should have a div element with class="container pt-50"', () => {
    expect(showDetailsWrapper.attributes('class')).toBe('container pt-50');
  });
});
