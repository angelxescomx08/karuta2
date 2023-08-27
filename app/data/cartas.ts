export interface Carta {
  id: string
  name: string
  silaba: string
  romaji: string
  english: string
  spanish: string
  author: string
  authorJapanese: string
  japanese: string
}

export const cartas = [
  {
    id: '1',
    name: 'Aki',
    silaba: 'Akino',
    romaji: 'Aki no ta no Kariho no io no Toma o arami Waga koromode wa Tsuyu ni nure tsutsu',
    english: 'Coarse the rush-mat roof Sheltering the harvest-hut Of the autumn rice-field; And my sleeves are growing wet With the moisture dripping through.',
    spanish: 'Áspero el techo de junco Refugiando la cabaña de la cosecha Del campo de arroz de otoño; Y mis mangas se humedecen Con la humedad goteando.',
    author: 'Tenchi Tennō',
    authorJapanese: '天智天皇(てんじてんのう)',
    japanese:
      '秋(あき)の田(た)の かり[ほ,お]の庵(い[ほ,お])の 苫(とま)をあらみ わが衣手(ころもで)は 露(つゆ)にぬれつつ'
  },
  {
    id: '2',
    name: 'Haru',
    silaba: 'Harusu',
    romaji: 'Haru sugite Natsu ki ni kerashi Shirotae no Koromo hosu cho Ama no Kaguyama',
    english: 'The spring has passed And the summer come again; For the silk-white robes, So they say, are spread to dry On the Mount of Heaven\'s Perfume.',
    spanish: 'La primavera ha pasado Y vuelve el verano; Por las túnicas blancas como la seda, Entonces dicen, se extienden para secar Sobre el Perfume del Monte del Cielo.',
    author: 'Jitō Tennō',
    authorJapanese: '持統天皇(じとうてんのう)',
    japanese:
      '春(はる)過(す)ぎて 夏(なつ)来(き)にけらし 白妙(しろた[へ,え])の 衣(ころも)ほす[てふ,ちょう] 天(あま)の香具山(かぐやま)'
  },
  {
    id: '3',
    name: 'Ashibiki',
    silaba: 'Ashi',
    romaji: 'Ashibiki no Yamadori no o no Shidari o no Naganagashi yo o Hitori ka mo nen',
    english: 'Oh, the foot-drawn trail Of the mountain-pheasant\'s tail Drooped like down-curved branch! Through this long, long-dragging night Must I lie in bed alone?',
    spanish: 'Oh, el sendero dibujado a pie De la cola del faisán montañés ¡Caído como una rama curvada hacia abajo! A través de esta larga y prolongada noche ¿Debo acostarme solo en la cama?',
    author: 'Kakinomoto no Hitomaro',
    authorJapanese: '柿本人麻呂(かきのもとのひとまろ)',
    japanese:
      'あしびきの 山鳥(やまどり)の尾([を,お])の しだり尾([を,お])の ながながし夜(よ)を ひとりかも寝(ね)[む,ん]'
  },
  {
    id: '4',
    name: 'Tago',
    silaba: 'Tago',
    romaji: 'Tago no Ura ni Uchi idete mireba Shirotae no Fuji no takane ni Yuki wa furi tsutsu',
    english: 'When I take the path To Tago\'s coast, I see Perfect whiteness laid On Mount Fuji\'s lofty peak By the drift of falling snow.',
    spanish: 'Cuando tomo el camino A la costa de Tago, veo Blancura perfecta puesta En el alto pico del monte Fuji Por la deriva de la nieve que cae.',
    author: 'Yamabe no Akahito',
    authorJapanese: '山部赤人(やまべのあかひと)',
    japanese:
      '田子(たご)の浦(うら)に うち出(い)でて見(み)れば 白妙(しろた[へ,え])の 富士(ふじ)の高嶺(たかね)に 雪(ゆき)は降(ふ)りつつ'
  },
  {
    id: '5',
    name: 'Okuyama',
    silaba: 'Oku',
    romaji: 'Okuyama ni Momiji fumiwake Naku shika no Koe kiku toki zo Aki wa kanashiki',
    english: 'In the mountain depths, Treading through the crimson leaves, The wandering stag calls. When I hear the lonely cry, Sad (how sad!) the autumn is.',
    spanish: 'En las profundidades de la montaña, Pisando las hojas carmesí Llama el ciervo errante. Cuando escucho el llanto solitario Triste (¡qué triste!) Es el otoño.',
    author: 'Sarumaru Dayū',
    authorJapanese: '猿丸大夫(さるまるだゆう)',
    japanese:
      '奥山(おくやま)に 紅葉(もみ[ぢ,じ])踏(ふ)み分(わ)け 鳴(な)く鹿(しか)の 声(こ[ゑ,え])聞(き)く時(とき)ぞ 秋(あき)は悲(かな)しき'
  },
  {
    id: '6',
    name: 'Kasasagi',
    silaba: 'Kasa',
    romaji: 'Kasasagi no Wataseru hashi ni Oku shimo no Shiroki o mireba Yo zo fuke ni keru',
    english: 'If I see that bridge That is spanned by flights of magpies Across the arc of heaven Made white with a deep-laid frost, Then the night is almost past.',
    spanish: 'Si veo ese puente Que está atravesado por vuelos de urracas Al otro lado del arco del cielo Blanqueado con una helada profunda, Entonces la noche casi ha pasado.',
    author: 'Chūnagon Yakamochi',
    authorJapanese: '中納言家持(ちゅうなごんやかもち)',
    japanese:
      'かささぎの 渡(わた)せる橋(はし)に 置(お)く霜(しも)の 白(しろ)きを見(み)れば 夜(よ)ぞ更(ふ)けにける'
  },
  {
    id: '7',
    name: 'Ama',
    silaba: 'Amano',
    romaji: 'Ama no hara Furisake mireba Kasuga naru Mikasa no yama ni Ideshi tsuki kamo',
    english: 'When I look up at The wide-stretched plain of heaven, Is the moon the same That rose on Mount Mikasa In the land of Kasuga?',
    spanish: 'Cuando miro hacia arriba La extensa llanura del cielo, ¿Es la luna la misma Que se elevó en el monte mikasa En la tierra de Kasuga?',
    author: 'Abe no Nakamaro',
    authorJapanese: '安倍仲麿(あべのなかまろ)',
    japanese:
      '天(あま)の原(はら) ふりさけ見(み)れば 春日(かすが)なる 三笠(みかさ)の山(やま)に 出(い)でし月(つき)かも'
  },
  {
    id: '8',
    name: 'Waga',
    silaba: 'Wagai',
    romaji: 'Waga io wa Miyako no tatsumi Shika zo sumu Yo o Ujiyama to Hito wa iu nari',
    english: 'My lowly hut is Southeast from the capital. Thus I choose to live. And the world in which I live Men have named a Mount of Gloom.',
    spanish: 'Mi humilde choza es Al sureste de la capital. Por eso elijo vivir. Y el mundo en el que vivo Los hombres han nombrado un Monte de la Penumbra.',
    author: 'Kisen Hōshi',
    authorJapanese: '喜撰法師(きせんほうし)',
    japanese:
      'わが庵(い[ほ,お])は 都(みやこ)のたつみ しかぞ住(す)む 世(よ)をう[ぢ,じ]山(やま)と 人(ひと)はい[ふ,う]なり'
  },
  {
    id: '9',
    name: 'Hana',
    silaba: 'Hanano',
    romaji: 'Hana no iro wa Utsuri ni keri na Itazura ni Waga mi yo ni furu Nagame seshi ma ni',
    english: 'Color of the flower Has already faded away, While in idle thoughts My life passes vainly by, As I watch the long rains fall.',
    spanish: 'Color de la flor Ya se ha desvanecido, Mientras en pensamientos ociosos Mi vida pasa en vano Mientras miro caer las lluvias prolongadas.',
    author: 'Ono no Komachi',
    authorJapanese: '小野小町(おののこまち)',
    japanese:
      '花(はな)の色(いろ)は うつりにけりな いた[づ,ず]らに わが身(み)世(よ)にふる ながめせしまに'
  },
  {
    id: '10',
    name: 'Kore',
    silaba: 'Kore',
    romaji: 'Kore ya kono Yuku mo kaeru mo Wakarete wa Shiru mo shiranu mo Osaka no seki',
    english: 'Truly, this is where Travelers who go or come Over parting ways — Friends or strangers — all must meet: The gate of Meeting Hill.',
    spanish: 'En verdad, aquí es donde Viajeros que van o vienen Sobre caminos de despedida - Amigos o extraños, todos deben encontrarse: La puerta de La colina de la reunión.',
    author: 'Semimaru',
    authorJapanese: '蝉丸(せみまる)',
    japanese:
      'これやこの 行(ゆ)くも帰(か[へ,え])るも 別(わか)れては 知(し)るも知(し)らぬも 逢坂([あふ,あう,おう,おお]さか)の関(せき)'
  },
  {
    id: '11',
    name: 'Wata',
    silaba: 'WatanoharaYa',
    romaji: 'Wata no hara Yasoshima kakete Kogi idenu to Hito ni wa tsugeyo Ama no tsuri bune',
    english: 'Over the wide sea Towards its many distant isles My ship sets sail. Will the fishing boats thronged here Proclaim my journey to the world?',
    spanish: 'Sobre el ancho mar Hacia sus muchas islas distantes Mi barco zarpa. ¿Los barcos de pesca abarrotados aquí  proclamarán mi viaje al mundo?',
    author: 'Sangi Takamura',
    authorJapanese: '参議篁(さんぎたかむら)',
    japanese:
      'わたの原(はら) 八十島(やそしま)かけて 漕(こ)ぎ出(い)でぬと 人(ひと)には告(つ)げよ あまの釣舟(つりぶね)'
  },
  {
    id: '12',
    name: 'Ama',
    silaba: 'Amatsu',
    romaji: 'Ama tsu kaze Kumo no kayoiji Fuki toji yo Otome no sugata Shibashi todomen',
    english: 'Let the winds of heaven Blow through the paths among the clouds And close their gates. Then for a while I could detain These messengers in maiden form.',
    spanish: 'Deja que los vientos del cielo soplen por los senderos entre las nubes y cierren sus puertas Luego, por un tiempo, pude detener a estos mensajeros en forma de doncella.',
    author: 'Sōjō Henjō',
    authorJapanese: '僧正遍昭(そうじょうへんじょう)',
    japanese:
      '天(あま)つ風(かぜ) 雲(くも)の通(かよ)[ひ,い]路([ぢ,じ]) 吹(ふ)き閉(と)[ぢ,じ]よ [を,お]とめの姿(すがた) しばしとどめ[む,ん]'
  },
  {
    id: '13',
    name: 'Tsukuba',
    silaba: 'Tsuku',
    romaji: 'Tsukuba ne no Mine yori otsuru Minano-gawa Koi zo tsumorite Fuchi to nari nuru',
    english: 'From Tsukuba\'s peak Falling waters have become Mina\'s still, full flow: So my love has grown to be Like the river\'s quiet deeps.',
    spanish: 'Desde el pico de Tsukuba las aguas que caen se han convertido en el flujo pleno y tranquilo de Mina así que mi amor ha crecido hasta convertirse en las tranquilas profundidades del río.',
    author: 'Yōzei In',
    authorJapanese: '陽成院(ようぜいいん)',
    japanese:
      '筑波嶺(つくばね)の 峰(みね)より落(お)つる みなの川(が[は,わ]) 恋(こ[ひ,い])ぞ積(つ)もりて 淵(ふち)となりぬる'
  },
  {
    id: '14',
    name: 'Michinoku',
    silaba: 'Michi',
    romaji: 'Michinoku no Shinobu moji-zuri Tare yue ni Midare some ni shi Ware naranaku ni',
    english: 'Like Michinoku prints Of the tangled leaves of ferns, It is because of you That I have become confused; But my love for you remains.',
    spanish: 'Como impresiones de Michinoku De las hojas enredadas de los helechos, Es por ti Que me he confundido; Pero mi amor por ti permanece.',
    author: 'Kawara no Sadaijin',
    authorJapanese: '河原左大臣(かわらのさだいじん)',
    japanese:
      '陸奥(みちのく)の しのぶも[ぢ,じ]ずり 誰(たれ)ゆ[ゑ,え]に 乱(みだ)れそめにし 我(われ)ならなくに'
  },
  {
    id: '15',
    name: 'Kimi',
    silaba: 'KimigatameHa',
    romaji: 'Kimi ga tame Haru no no ni idete Wakana tsumu Waga koromode ni Yuki wa furi tsutsu',
    english: 'It is for your sake That I walk the fields in spring, Gathering green herbs, While my garment\'s hanging sleeves Are speckled with falling snow.',
    spanish: 'Es por tu bien Que camino por los campos en primavera, Recolectando hierbas verdes, Mientras que las mangas colgadas de mi prenda Están salpicadas de nieve que cae.',
    author: 'Kōkō Tennō',
    authorJapanese: '光孝天皇(こうこうてんのう)',
    japanese:
      '君(きみ)がため 春(はる)の野(の)に出(い)でて 若菜(わかな)つむ わが衣手(ころもで)に 雪(ゆき)は降(ふ)りつつ'
  },
  {
    id: '16',
    name: 'Tachi',
    silaba: 'Tachi',
    romaji: 'Tachi wakare Inaba no yama no Mine ni oru Matsu to shi kikaba Ima kaeri kon',
    english: 'Though we are parted, If on Mount Inaba\'s peak I should hear the sound Of the pine trees growing there, I\'ll come back again to you.',
    spanish: 'Aunque estemos separados Si en la cima del monte Inaba Debería escuchar el sonido De los pinos que crecen allí, Volveré de nuevo a ti.',
    author: 'Chūnagon Yukihira',
    authorJapanese: '中納言行平(ちゅうなごんゆきひら)',
    japanese:
      '立(た)ち別(わか)れ いなばの山(やま)の 峰(みね)に生(お)[ふ,う]る まつとし聞(き)かば 今(いま)帰(か[へ,え])り来(こ)[む,ん]'
  },
  {
    id: '17',
    name: 'Chihayaburu Kamiyo',
    silaba: 'Chiha',
    romaji: 'Chihayaburu Kamiyo mo kikazu Tatsuta-gawa Kara kurenai ni Mizu kukuru to wa',
    english: 'Even when the gods Held sway in the ancient days, I have never heard That water gleamed with autumn red As it does in Tatta\'s stream',
    spanish: 'Incluso cuando los dioses Dominaban en los días antiguos, Nunca he oído Que el agua brillaba con rojo otoñal Como lo hace en la corriente de Tatta',
    author: 'Ariwara no Narihira Ason',
    authorJapanese: '在原業平朝臣(ありわらのなりひらあそん)',
    japanese:
      'ちはやぶる 神代(かみよ)も聞(き)かず 竜田川(たつたが[は,わ]) からくれな[ゐ,い]に 水(み[づ,ず])くくるとは'
  },
  {
    id: '18',
    name: 'Sumi',
    silaba: 'Su',
    romaji: 'Sumi no e no Kishi ni yoru nami Yoru sae ya Yume no kayoi ji Hito me yoku ran',
    english: 'The waves are gathered On the shore of Sumi Bay, And in the gathered night, When in dreams I go to you, I hide from people\'s eyes.',
    spanish: 'Las olas se juntan En la orilla de la bahía de Sumi, Y en la noche reunida Cuando en sueños voy a ti Me escondo de los ojos de la gente.',
    author: 'Fujiwara no Toshiyuki Ason',
    authorJapanese: '藤原敏行朝臣(ふじわらのとしゆきあそん)',
    japanese:
      '住(すみ)の江(え)の 岸(きし)に寄(よ)る波(なみ) よるさ[へ,え]や 夢(ゆめ)の通(かよ)[ひ,い]路([ぢ,じ]) 人目(ひとめ)よくら[む,ん]'
  },
  {
    id: '19',
    name: 'Naniwa',
    silaba: 'Naniwaga',
    romaji: 'Naniwa gata Mijikaki ashi no Fushi no ma mo Awade kono yo o Sugushite yo to ya',
    english: 'Even for a time Short as a piece of the reeds In Naniwa\'s marsh, We must never meet again: Is this what you are asking me?',
    spanish: 'Incluso por un tiempo Corto como un trozo de junco En el pantano de Naniwa, No debemos volver a encontrarnos nunca: ¿Es esto lo que me preguntas?',
    author: 'Ise',
    authorJapanese: '伊勢(いせ)',
    japanese:
      '難波潟(なに[は,わ]がた) みじかき芦(あし)の ふしの間(ま)も 逢(あ)[は,わ]でこの世(よ)を 過(す)ぐしてよとや'
  },
  {
    id: '20',
    name: 'Wabi',
    silaba: 'Wabi',
    romaji: 'Wabi nureba Ima hata onaji Naniwa naru Mi o tsukushite mo Awan to zo omou',
    english: 'In this dire distress My life is meaningless. So we must meet now, Even though it costs my life In the Bay of Naniwa.',
    spanish: 'En esta terrible angustia Mi vida no tiene sentido. Así que debemos encontrarnos ahora Aunque me cueste la vida En la bahía de Naniwa.',
    author: 'Motoyoshi Shinnō',
    authorJapanese: '元良親王(もとよししんのう)',
    japanese:
      'わびぬれば 今(いま)はた同(おな)じ 難波(なに[は,わ])なる みをつくしても 逢(あ)[は,わ][む,ん]とぞ思(おも)[ふ,う]'
  },
  {
    id: '21',
    name: 'Ima',
    silaba: 'Imako',
    romaji: 'Ima kon to Iishi bakari ni Nagatsuki no Ariake no tsuki o Machi izuru kana',
    english: 'Just because she said In a moment I will come, I\'ve awaited her Until the moon of daybreak, In the long month, has appeared.',
    spanish: 'Solo porque ella dijo En un momento vendré, La he esperado Hasta la luna del amanecer En el mes largo, ha aparecido.',
    author: 'Sosei Hōshi',
    authorJapanese: '素性法師(そせいほうし)',
    japanese:
      '今(いま)来(こ)[む,ん]と 言(い)[ひ,い]しばかりに 長月(ながつき)の 有明(ありあけ)の月(つき)を 待(ま)ち出(い)でつるかな'
  },
  {
    id: '22',
    name: 'Fuku',
    silaba: 'Fu',
    romaji: 'Fuku kara ni Aki no kusaki no Shiorureba Mube yama kaze o Arashi to iuran',
    english: 'It is by its breath That autumn\'s leaves of trees and grass Are wasted and driven. So they call this mountain wind The wild one, the destroyer.',
    spanish: 'Es por su aliento Que hojas de otoño de árboles y pasto Están desperdiciados y conducidos. Entonces llaman a este viento de montaña El salvaje, el destructor.',
    author: 'Fun\'ya no Yasuhide',
    authorJapanese: '文屋康秀(ふんやのやすひで)',
    japanese:
      '吹(ふ)くからに 秋(あき)の草木(くさき)の し[を,お]るれば むべ山風(やまかぜ)を 嵐(あらし)とい[ふ,う]ら[む,ん]'
  },
  {
    id: '23',
    name: 'Tsuki',
    silaba: 'Tsuki',
    romaji: 'Tsuki mireba Chiji ni mono koso Kanashi kere Waga mi hitotsu no Aki ni wa aranedo',
    english: 'As I view the moon, Many things come into my mind, And my thoughts are sad; Yet it\'s not for me alone, That the autumn time has come.',
    spanish: 'Mientras veo la luna Muchas cosas me vienen a la mente Y mis pensamientos están tristes; Sin embargo, no es solo para mí Que ha llegado el otoño.',
    author: 'Ōe no Chisato',
    authorJapanese: '大江千里(おおえのちさと)',
    japanese:
      '月(つき)みれば 千々(ちぢ)にものこそ 悲(かな)しけれ わが身(み)ひとつの 秋(あき)にはあらねど'
  },
  {
    id: '24',
    name: 'Kono',
    silaba: 'Kono',
    romaji: 'Kono tabi wa Nusa mo toriaezu Tamukeyama Momiji no nishiki Kami no mani mani',
    english: 'At the present time, Since I could bring no offering, See Mount Tamuke! Here are brocades of red leaves, As a tribute to the gods.',
    spanish: 'En el presente, Ya que no pude traer ninguna ofrenda, ¡Ve el monte Tamuke! Aquí hay brocados de hojas rojas, Como tributo a los dioses.',
    author: 'Kan Ke',
    authorJapanese: '菅家(かんけ)',
    japanese:
      'このたびは ぬさもとりあ[へ,え]ず 手向山(たむけやま) 紅葉(もみ[ぢ,じ])の錦(にしき) 神(かみ)のまにまに'
  },
  {
    id: '25',
    name: 'Na',
    silaba: 'Nanishi',
    romaji: 'Na ni shi owaba Osakayama no Sanekazura Hito ni shirarede Kuru yoshi mo gana',
    english: 'If your name is true, Trailing vine of Meeting Hill, Isn\'t there some way, Hidden from people\'s gaze, That you can draw her to my side?',
    spanish: 'Si tu name es verdadero Enredadera de la colina de la reunión, ¿No hay alguna manera Oculta a la mirada de la gente Que puedas atraerla a mi lado?',
    author: 'Sanjō Udaijin',
    authorJapanese: '三条右大臣(さんじょうのうだいじん)',
    japanese:
      '名(な)にしお[は,わ]ば 逢坂山([あふ,あう,おう,おお]さかやま)の さねか[づ,ず]ら 人(ひと)に知(し)られで くるよしもがな'
  },
  {
    id: '26',
    name: 'Ogurayama Mine',
    silaba: 'Ogu',
    romaji: 'Ogurayama Mine no momijiba Kokoro araba Ima hitotabi no Miyuki matanan',
    english: 'If the maple leaves On Ogura mountain Could only have hearts, They would longingly await The emperor\'s pilgrimage.',
    spanish: 'Si las hojas de arce En la montaña Ogura Solo pudieran tener corazones, Esperarían con nostalgia La peregrinación del emperador.',
    author: 'Teishin Kō',
    authorJapanese: '貞信公(ていしんこう)',
    japanese:
      '小倉山([を,お]ぐらやま) 峰(みね)のもみ[ぢ,じ]葉(ば) 心(こころ)あらば 今(いま)ひとたびの みゆき待(ま)たな[む,ん]'
  },
  {
    id: '27',
    name: 'Mika',
    silaba: 'Mikano',
    romaji: 'Mika no Hara Wakite nagaruru Izumi-gawa Itsu mi kitote ka Koishi karuran',
    english: 'Over Mika\'s plain, Gushing forth and flowing free, Is Izumi\'s stream. I do not know if we have met: Why, then, do I long for her?',
    spanish: 'Sobre la llanura de Mika Brotando y fluyendo libremente, Es la corriente de Izumi. No sé si nos hemos encontrado: Entonces, ¿por qué la anhelo?',
    author: 'Chūnagon Kanesuke',
    authorJapanese: '中納言兼輔(ちゅうなごんかねすけ)',
    japanese:
      'みかの原(はら) わきて流(なが)るる い[づ,ず]み川(が[は,わ]) いつ見(み)きとてか 恋(こ[ひ,い])しかるら[む,ん]'
  },
  {
    id: '28',
    name: 'Yama-zato',
    silaba: 'Yamaza',
    romaji: 'Yama-zato wa Fuyu zo sabishisa Masari keru Hitome mo kusa mo Karenu to omoeba',
    english: 'Winter loneliness In a mountain village grows Only deeper, when Guests are gone, and leaves and grass Are withered: troubling thoughts.',
    spanish: 'La soledad invernal en un pueblo de montaña se hace más profunda, cuando Los invitados se han ido y las hojas y la hierba se han secado: pensamientos inquietantes.',
    author: 'Minamoto no Muneyuki Ason',
    authorJapanese: '源宗于朝臣(みなもとのむねゆきあそん)',
    japanese:
      '山里(やまざと)は 冬(ふゆ)ぞさびしさ まさりける 人目(ひとめ)も草(くさ)も かれぬと思(おも)[へ,え]ば'
  },
  {
    id: '29',
    name: 'Kokoroate',
    silaba: 'Kokoroa',
    romaji: 'Kokoroate ni Orabaya oran Hatsushimo no Oki madowaseru Shiragiku no hana',
    english: 'If it were my wish To pick the white chrysanthemums, Puzzled by the frost Of the early autumn time, I by chance might pluck the flower.',
    spanish: 'Si fuera mi deseo Recoger los crisantemos blancos, Desconcertado por la escarcha De principios de otoño, Por casualidad podría arrancar la flor.',
    author: 'Ōshikōchi no Mitsune',
    authorJapanese: '凡河内躬恒(おおしこうちのみつね)',
    japanese:
      '心(こころ)あてに 折([を,お])らばや折([を,お])ら[む,ん] 初霜(はつしも)の 置(お)きまど[は,わ]せる 白菊(しらぎく)の花(はな)'
  },
  {
    id: '30',
    name: 'Ariake',
    silaba: 'Aria',
    romaji: 'Ariake no Tsurenaku mieshi Wakare yori Akatsuki bakari Uki mono wa nashi',
    english: 'Like the morning moon, Cold, unpitying was my love. And since we parted, I dislike nothing so much As the breaking light of day.',
    spanish: 'Como la luna de la mañana Frío, indiferente fue mi amor. Y desde que nos separamos Nada me disgusta tanto Como la luz del amanecer.',
    author: 'Mibu no Tadamine',
    authorJapanese: '壬生忠岑(みぶのただみね)',
    japanese:
      '有明(ありあけ)の つれなく見(み)えし 別(わか)れより 暁(あかつき)ばかり 憂(う)きものはなし'
  },
  {
    id: '31',
    name: 'Asaborake Ariake',
    silaba: 'Asaborake A',
    romaji: 'Asaborake Ariake no tsuki to Miru made ni Yoshino no sato ni Fureru shirayuki',
    english: 'At the break of day, Just as though the morning moon Lightened the dim scene, Yoshino\'s village lay In a haze of falling snow.',
    spanish: 'Al romper el día Como si la luna de la mañana Iluminara la oscura escena, La aldea de Yoshino estaba envuelta En una neblina de nieve que caía.',
    author: 'Sakanoue no Korenori',
    authorJapanese: '坂上是則(さかのうえのこれのり)',
    japanese:
      '朝(あさ)ぼらけ 有明(ありあけ)の月(つき)と 見(み)るまでに 吉野(よしの)の里(さと)に 降(ふ)れる白雪(しらゆき)'
  },
  {
    id: '32',
    name: 'Yama',
    silaba: 'Yamaga',
    romaji: 'Yama kawa ni Kaze no kaketaru Shigarami wa Nagare mo aenu Momiji nari keri',
    english: 'In a mountain stream There is a wattled barrier Built by the busy wind. Yet it\'s only maple leaves, Powerless to flow away.',
    spanish: 'En un arroyo de montaña Hay una barrera de acacia Construida por el viento ajetreado. Sin embargo, son solo hojas de arce Sin poder para fluir.',
    author: 'Harumichi no Tsuraki',
    authorJapanese: '春道列樹(はるみちのつらき)',
    japanese:
      '山川(やまが[は,わ])に 風(かぜ)のかけたる しがらみは 流(なが)れもあ[へ,え]ぬ 紅葉(もみ[ぢ,じ])なりけり'
  },
  {
    id: '33',
    name: 'Hisakata',
    silaba: 'Hisa',
    romaji: 'Hisakata no Hikari nodokeki Haru no hi ni Shizu-gokoro naku Hana no chiruran',
    english: 'In the peaceful light Of the ever-shining sun In the days of spring, Why do the cherry\'s new-blown blooms Scatter like restless thoughts?',
    spanish: 'En la luz pacífica Del sol siempre brillante En los días de primavera ¿Por qué las flores recién nacidas del cerezo se dispersan como pensamientos inquietos?',
    author: 'Ki no Tomonori',
    authorJapanese: '紀友則(きのとものり)',
    japanese:
      'ひさかたの 光(ひかり)のどけき 春(はる)の日(ひ)に 静心(し[づ,ず]ごころ)なく 花(はな)の散(ち)るら[む,ん]'
  },
  {
    id: '34',
    name: 'Tare',
    silaba: 'Tare',
    romaji: 'Tare o ka mo Shiru hito ni sen Takasago no Matsu mo mukashi no Tomo nara naku ni',
    english: 'Who is still alive When I have grown so old That I can call my friends? Even Takasago\'s pines No longer offer comfort.',
    spanish: '¿Quién sigue vivo  Cuando he envejecido tanto Que pueda llamar mi amigo? Incluso los pinos de Takasago  Ya no ofrecen comodidad.',
    author: 'Fujiwara no Okikaze',
    authorJapanese: '藤原興風(ふじわらのおきかぜ)',
    japanese:
      '誰(たれ)をかも 知(し)る人(ひと)にせ[む,ん] 高砂(たかさご)の 松(まつ)も昔(むかし)の 友(とも)ならなくに'
  },
  {
    id: '35',
    name: 'Hito',
    silaba: 'Hitoha',
    romaji: 'Hito wa isa Kokoro mo shirazu Furusato wa Hana zo mukashi no Ka ni nioi keru',
    english: 'The depths of the hearts Of humankind cannot be known. But in my birthplace The plum blossoms smell the same As in the years gone by.',
    spanish: 'Las profundidades de los corazones De la humanidad no se pueden conocer. Pero en mi lugar de nacimiento Las flores del ciruelo huelen igual Como en los años pasados.',
    author: 'Ki no Tsurayuki',
    authorJapanese: '紀貫之(きのつらゆき)',
    japanese:
      '人(ひと)はいさ 心(こころ)も知(し)らず ふるさとは 花(はな)ぞ昔(むかし)の 香(か)に匂(に[ほ,お])[ひ,い]ける'
  },
  {
    id: '36',
    name: 'Natsu',
    silaba: 'Natsu',
    romaji: 'Natsu no yo wa Mada yoi nagara Akenuru o Kumo no izuko ni Tsuki yadoruran',
    english: 'In the summer night The evening still seems present, But the dawn is here. To what region of the clouds Has the wandering moon come home?',
    spanish: 'En la noche de verano, La tarde todavía parece estar presente, Pero el amanecer está aquí. ¿A qué región de las nubes Ha vuelto a casa la luna errante?',
    author: 'Kiyohara no Fukayabu',
    authorJapanese: '清原深養父(きよはらのふかやぶ)',
    japanese:
      '夏(なつ)の夜(よ)は まだ宵(よ[ひ,い])ながら 明(あ)けぬるを 雲(くも)のい[づ,ず]こに 月(つき)宿(やど)るら[む,ん]'
  },
  {
    id: '37',
    name: 'Shiratsuyu',
    silaba: 'Shira',
    romaji: 'Shiratsuyu ni Kaze no fukishiku Aki no no wa Tsuranuki tomenu Tama zo chiri keru',
    english: 'In the autumn fields When the heedless wind blows by Over the pure-white dew, How the myriad unstrung gems Are scattered everywhere around',
    spanish: 'En los campos de otoño Cuando el viento despreocupado pasa Sobre el rocío blanco puro, Cómo la miríada de gemas sin encordar Están esparcidas por todas partes',
    author: 'Fun\'ya no Asayasu',
    authorJapanese: '文屋朝康(ふんやのあさやす)',
    japanese:
      '白露(しらつゆ)に 風(かぜ)の吹(ふ)きしく 秋(あき)の野(の)は つらぬきとめぬ 玉(たま)ぞ散(ち)りける'
  },
  {
    id: '38',
    name: 'Wasuraruru Mi',
    silaba: 'Wasura',
    romaji: 'Wasuraruru Mi o ba omowazu Chikaite shi Hito no inochi no Oshiku mo aru kana',
    english: 'Though he forsook me, For myself I do not care: He made a promise, And his life, who is forsworn, Oh how pitiful that is.',
    spanish: 'Aunque me abandonó A mí no me importa: Hizo una promesa Y su vida, que está abandonada, Oh, qué lamentable es eso.',
    author: 'Ukon',
    authorJapanese: '右近(うこん)',
    japanese:
      '忘(わす)らるる 身(み)をば思(おも)[は,わ]ず 誓(ちか)[ひ,い]てし 人(ひと)の命(いのち)の 惜([を,お])しくもあるかな'
  },
  {
    id: '39',
    name: 'Asajiu',
    silaba: 'Asaji',
    romaji: 'Asajiu no Ono no shinohara Shinoburedo Amarite nado ka Hito no koishiki',
    english: 'Bamboo growing Among the tangled reeds Like my hidden love: But it is too much to bear That I still love her so.',
    spanish: 'Cultivo de bambú Entre los juncos enredados Como mi amor escondido: Pero es demasiado para soportar Que todavía la amo tanto.',
    author: 'Sangi Hitoshi',
    authorJapanese: '参議等(さんぎひとし)',
    japanese:
      '浅茅生(あさ[ぢ,じ][ふ,う])の 小野([を,お]の)の篠原(しのはら) 忍(しの)ぶれど あまりてなどか 人(ひと)の恋(こ[ひ,い])しき'
  },
  {
    id: '40',
    name: 'Shinoburedo Iro',
    silaba: 'Shino',
    romaji: 'Shinoburedo Iro ni ide ni keri Waga koi wa Mono ya omou to Hito no tou made',
    english: 'Though I would hide it, In my face it still appears — My fond, secret love. And now he questions me: Is something bothering you?',
    spanish: 'Aunque lo escondería En mi cara todavía aparece Mi hallazgo, amor secreto. Y ahora el me cuestiona: ¿Algo te esta molestando?',
    author: 'Taira no Kanemori',
    authorJapanese: '平兼盛(たいらのかねもり)',
    japanese:
      '忍(しの)ぶれど 色(いろ)に出(い)でにけり わが恋(こ[ひ,い])は ものや思(おも)[ふ,う]と 人(ひと)の問(と)[ふ,う]まで'
  },
  {
    id: '41',
    name: 'Koisu',
    silaba: 'Koi',
    romaji: 'Koisu cho Waga na wa madaki Tachi ni keri Hito shirezu koso Omoi someshi ka',
    english: 'It is true I love, But the rumor of my love Had gone far and wide, When people should not have known That I had begun to love.',
    spanish: 'Es verdad que amo Pero el rumor de mi amor Se había extendido por todas partes Cuando la gente no debería haber sabido Que había comenzado a amar.',
    author: 'Mibu no Tadami',
    authorJapanese: '壬生忠見(みぶのただみ)',
    japanese:
      '恋(こ[ひ,い])す[てふ,ちょう] わが名(な)はまだき 立(た)ちにけり 人(ひと)知(し)れずこそ 思(おも)[ひ,い]そめしか'
  },
  {
    id: '42',
    name: 'Chigiriki',
    silaba: 'Chigiriki',
    romaji: 'Chigiriki na Katami ni sode o Shibori tsutsu Sue no Matsuyama Nami kosaji to wa',
    english: 'Our sleeves were wet with tears As pledges that our love — Will last until Over Sue\'s Mount of Pines Ocean waves are breaking.',
    spanish: 'Nuestras mangas estaban mojadas con lágrimas Como promesas de que nuestro amor - Durará hasta Que se rompan las olas del océano En el Monte de los Pinos de Sue.',
    author: 'Kiyohara no Motosuke',
    authorJapanese: '清原元輔(きよはらのもとすけ)',
    japanese:
      '契(ちぎ)りきな かたみに袖(そで)を しぼりつつ 末(す[ゑ,え])の松山(まつやま) 波(なみ)越(こ)さじとは'
  },
  {
    id: '43',
    name: 'Ai',
    silaba: 'Ai',
    romaji: 'Ai mite no Nochi no kokoro ni Kurabureba Mukashi wa mono o Omowazari keri',
    english: 'I have met my love. When I compare this present With feelings of the past, My passion is now as if I have never loved before.',
    spanish: 'He conocido a mi amor. Cuando comparo este presente Con sentimientos del pasado Mi pasion es ahora como si Nunca antes hubiera amado.',
    author: 'Chūnagon Atsutada',
    authorJapanese: '権中納言敦忠(ごんちゅうなごんあつただ)',
    japanese:
      '逢(あ)[ひ,い]見(み)ての 後(のち)の心(こころ)に くらぶれば 昔(むかし)はものを 思(おも)[は,わ]ざりけり'
  },
  {
    id: '44',
    name: 'Au',
    silaba: 'Ooko',
    romaji: 'Au koto no Taete shi nakuba Nakanaka ni Hito o mo mi o mo Urami zaramashi',
    english: 'If it should happen That we never met again, I would not complain; And I doubt that she or I Would feel that we were left alone.',
    spanish: 'Si sucediera Que nunca nos volviéramos a ver, No me quejaría; Y dudo que ella o yo Sintiéramos que nos quedamos solos.',
    author: 'Chūnagon Asatada',
    authorJapanese: '中納言朝忠(ちゅうなごんあさただ)',
    japanese:
      '[逢ふ,あふ,あう,おう,おお]ことの 絶(た)えてしなくは なかなかに 人(ひと)をも身(み)をも 恨(うら)みざらまし'
  },
  {
    id: '45',
    name: 'Aware',
    silaba: 'aware',
    romaji: 'Aware to mo Iu beki hito wa Omooede Mi no itazura ni Narinu beki kana',
    english: 'Surely there is none Who will speak a pitying word About my lost love. Now my folly\'s fitting end Is my own nothingness.',
    spanish: 'Seguramente no hay nadie Que diga una palabra de lástima Sobre mi amor perdido. Ahora bien, el final apropiado De mi locura es mi propia nada.',
    author: 'Kentoku Kō',
    authorJapanese: '謙徳公(けんとくこう)',
    japanese:
      'あ[は,わ]れとも い[ふ,う]べき人(ひと)は 思(おも)[ほ,お]えで 身(み)のいた[づ,ず]らに なりぬべきかな'
  },
  {
    id: '46',
    name: 'Yura',
    silaba: 'Yura',
    romaji: 'Yura no to o Wataru funabito Kaji o tae Yukue mo shiranu Koi no michi kana',
    english: 'Like a mariner Sailing over Yura\'s strait With his rudder gone: Where, over the deep of love, The end lies, I do not know.',
    spanish: 'Como un marinero Navegando sobre el estrecho de Yura Sin su timón: Dónde, sobre el fondo del amor, El final miente, no lo sé.',
    author: 'Sone no Yoshitada',
    authorJapanese: '曾禰好忠(そねのよしただ)',
    japanese:
      '由良(ゆら)のとを 渡(わた)る舟人(ふなびと) か[ぢ,じ]を絶(た)え 行方(ゆく[へ,え])も知(し)らぬ 恋(こ[ひ,い])の道(みち)かな'
  },
  {
    id: '47',
    name: 'Yaemugura Shigereru',
    silaba: 'Yae',
    romaji: 'Yaemugura Shigereru yado no Sabishiki ni Hito koso miene Aki wa ki ni keri',
    english: 'To the dim cottage Overgrown with thick-leaved vines In its loneliness Comes the dreary autumn time: But there no people come.',
    spanish: 'A la cabaña oscura Cubierta de enredaderas de hojas gruesas En su soledad Viene la triste época del otoño: Pero no viene nadie.',
    author: 'Egyō Hoshi',
    authorJapanese: '恵慶法師(えぎょうほうし)',
    japanese:
      '八重(や[へ,え])むぐら 茂(しげ)れる宿(やど)の さびしきに 人(ひと)こそ見(み)えね 秋(あき)は来(き)にけり'
  },
  {
    id: '48',
    name: 'Kaze',
    silaba: 'Kazeo',
    romaji: 'Kaze o itami Iwa utsu nami no Onore nomi Kudakete mono o Omou koro kana',
    english: 'Like a driven wave, Dashed by fierce winds on a rock, So am I: alone And crushed upon the shore, Remembering what has been.',
    spanish: 'Como una ola impulsada Golpeada por vientos feroces sobre una roca, Yo también: solo Y aplastado en la orilla, Recordando lo que ha sido.',
    author: 'Minamoto no Shigeyuki',
    authorJapanese: '源重之(みなもとのしげゆき)',
    japanese:
      '風(かぜ)をいたみ 岩(い[は,わ])うつ波(なみ)の おのれのみ 砕(くだ)けてものを 思(おも)[ふ,う]ころかな'
  },
  {
    id: '49',
    name: 'Mikakimori Eji',
    silaba: 'Mikaki',
    romaji: 'Mikakimori Eji no taku hi no Yoru wa moe Hiru wa kie tsutsu Mono o koso omoe',
    english: 'Like the guard\'s fires Kept at the imperial gateway — Burning through the night, Dull in ashes through the day — Is the love aglow in me.',
    spanish: 'Como los fuegos de la guardia Guardado en la puerta imperial - Ardiendo toda la noche Embotado en cenizas durante el día ¿Es el amor resplandeciente en mí?',
    author: 'Ōnakatomi no Yoshinobu Ason',
    authorJapanese: '大中臣能宣朝臣(おおなかとみのよしのぶあそん)',
    japanese:
      'みかきもり 衛士([ゑ,え]じ)のたく火(ひ)の 夜(よる)は燃(も)え 昼(ひる)は消(き)えつつ ものをこそ思(おも)[へ,え]'
  },
  {
    id: '50',
    name: 'Kimi',
    silaba: 'KimigatameO',
    romaji: 'Kimi ga tame Oshi karazarishi Inochi sae Nagaku mo gana to Omoi keru kana',
    english: 'For your precious sake, Once my eager life itself Was not dear to me. But now it is my heart\'s desire It may long, long years endure.',
    spanish: 'Por tu precioso bien, Una vez, mi ansiosa vida misma No me fue querida. Pero ahora es el deseo de mi corazón Podría durar, muchos años.',
    author: 'Fujiwara no Yoshitaka',
    authorJapanese: '藤原義孝(ふじわらのよしたか)',
    japanese:
      '君(きみ)がため 惜([を,お])しからざりし 命(いのち)さ[へ,え] 長(なが)くもがなと 思(おも)[ひ,い]けるかな'
  },
  {
    id: '51',
    name: 'Kaku',
    silaba: 'Kaku',
    romaji: 'Kaku to dani Eyawa ibuki no Sashimogusa Sashimo shiraji na Moyuru omoi o',
    english: 'How can I tell her How fierce my love for her is? Will she understand That the love I feel for her Burns like Ibuki\'s fire plant?',
    spanish: '¿Cómo puedo decirle lo feroz Que es mi amor por ella? ¿Entenderá Que el amor que siento por ella Arde como la planta de fuego de Ibuki?',
    author: 'Fujiwara no Sanekata Ason',
    authorJapanese: '藤原実方朝臣(ふじわらのさねかたあそん)',
    japanese:
      'かくとだに えやはいぶきの さしも草(ぐさ) さしも知(し)らじな 燃(も)ゆる思(おも)[ひ,い]を'
  },
  {
    id: '52',
    name: 'Akenureba Kururu',
    silaba: 'Ake',
    romaji: 'Akenureba Kururu mono to wa Shiri nagara Nao urameshiki Asaborake kana',
    english: 'Though I know indeed That the night will come again After day has dawned, Still, in truth, I hate the sight Of the morning\'s coming light.',
    spanish: 'Aunque sé de hecho Que la noche vendrá de nuevo Después de que amanezca el día Aún así, la verdad, odio la visión De que la mañana se acerca.',
    author: 'Fujiwara no Michinobu Ason',
    authorJapanese: '藤原道信朝臣(ふじわらのみちのぶあそん)',
    japanese:
      '明(あ)けぬれば 暮(く)るるものとは 知(し)りながら な[ほ,お]恨(うら)めしき 朝(あさ)ぼらけかな'
  },
  {
    id: '53',
    name: 'Nageki',
    silaba: 'Nageki',
    romaji: 'Nageki tsutsu Hitori nuru yo no Akuru ma wa Ikani hisashiki Mono to ka wa shiru',
    english: 'Lying all alone, Through the hours of the night, Till the daylight comes: Can you realize at all The emptiness of that night?',
    spanish: 'Tumbado solo A través de las horas de la noche Hasta que llegue la luz del día: ¿Puedes darte cuenta Del vacío de esa noche?',
    author: 'Udaishō Michitsuna no Haha',
    authorJapanese: '右大将道綱母(うだいしょうみちつなのはは)',
    japanese:
      '嘆(なげ)きつつ ひとり寝(ぬ)る夜(よ)の 明(あ)くる間(ま)は いかに久(ひさ)しき ものとかは知(し)る'
  },
  {
    id: '54',
    name: 'Wasureji',
    silaba: 'wasure',
    romaji: 'Wasureji no Yukusue made wa Katakereba Kyo o kagiri no Inochi to mo gana',
    english: 'If remembering me Will for him in future years Be too difficult, It would be well this very day That I should end my life.',
    spanish: 'Si recordarme Será demasiado difícil Para él en los próximos años, Sería bueno que este mismo día Pusiera fin a mi vida.',
    author: 'Gidō Sanshi no Haha',
    authorJapanese: '儀同三司母(ぎどうさんしのはは)',
    japanese:
      '忘(わす)れじの 行(ゆ)く末(す[ゑ,え])までは かたければ 今日([けふ,きょう])を限(かぎ)りの 命(いのち)ともがな'
  },
  {
    id: '55',
    name: 'Taki',
    silaba: 'Taki',
    romaji: 'Taki no oto wa Taete hisashiku Narinuredo Na koso nagarete Nao kikoe kere',
    english: 'Though the waterfall Ceased its flowing long ago, And its sound is stilled, Yet, in name it ever flows, And in fame may yet be heard.',
    spanish: 'A través de la cascada Dejó de fluir hace mucho tiempo, Y su sonido es quieto Sin embargo, en name siempre fluye, Y en la fama aún se puede escuchar.',
    author: 'Dainagon Kintō',
    authorJapanese: '大納言公任(だいなごんきんとう)',
    japanese:
      '滝(たき)の音(おと)は 絶(た)えて久(ひさ)しく なりぬれど 名(な)こそ流(なが)れて な[ほ,お]聞(き)こえけれ'
  },
  {
    id: '56',
    name: 'Arazaran Kono',
    silaba: 'Araza',
    romaji: 'Arazaran Kono yo no hoka no Omoide ni Ima hitotabi no Au koto mo gana',
    english: 'Soon my life will close. When I am beyond this world And have forgotten it, Let me remember only this: One final meeting with you.',
    spanish: 'Pronto mi vida se cerrará. Cuando estoy más allá de este mundo Y lo he olvidado, Déjame recordar solo esto: Un último encuentro contigo.',
    author: 'Izumi Shikibu',
    authorJapanese: '和泉式部(いずみしきぶ)',
    japanese:
      'あらざら[む,ん] この世(よ)のほかの 思(おも)[ひ,い]出(で)に 今(いま)ひとたびの [逢ふ,あふ,あう,おう,おお]こともがな'
  },
  {
    id: '57',
    name: 'Meguri',
    silaba: 'Me',
    romaji: 'Meguri aite Mishi ya sore to mo Wakanu ma ni Kumo-gakure ni shi Yowa no tsuki kana',
    english: 'Meeting on the path: But I cannot clearly know If it was he, Because the midnight moon In a cloud had disappeared.',
    spanish: 'Reunión en el camino: Pero no puedo saber claramente Si fue él Porque la luna de medianoche En una nube había desaparecido.',
    author: 'Murasaki Shikibu',
    authorJapanese: '紫式部(むらさきしきぶ)',
    japanese:
      'めぐり逢(あ)[ひ,い]て 見(み)しやそれとも わかぬ間(ま)に 雲隠(くもがく)れにし 夜半(よ[は,わ])の月(つき)かな'
  },
  {
    id: '58',
    name: 'Arimayama Ina',
    silaba: 'Arima',
    romaji: 'Arimayama Ina no sasawara Kaze fukeba Ide soyo hito o Wasure ya wa suru',
    english: 'As Mount Arima Sends its rustling winds across Ina\'s bamboo plains, I will be just as steadfast And never will forget you.',
    spanish: 'Como el monte Arima Envía sus vientos susurrantes a través Llanuras de bambú de Ina, Seré igual de firme Y nunca te olvidaré.',
    author: 'Daini no Sanmi',
    authorJapanese: '大弐三位(だいにのさんみ)',
    japanese:
      '有馬山(ありまやま) 猪名([ゐ,い]な)の笹原(ささはら) 風(かぜ)吹(ふ)けば いでそよ人(ひと)を 忘(わす)れやはする'
  },
  {
    id: '59',
    name: 'Yasurawade Nenamashi',
    silaba: 'Yasu',
    romaji: 'Yasurawade Nenamashi mono o Sayo fukete Katabuku made no Tsuki o mishi kana',
    english: 'Better to have slept Care-free, than to keep vain watch Through the passing night, Till I saw the lonely moon Traverse her descending path.',
    spanish: 'Mejor haber dormido Despreocupado, que vigilar en vano A través de la noche que pasa Hasta que vi la luna solitaria Atravesar su camino descendente.',
    author: 'Akazome Emon',
    authorJapanese: '赤染衛門(あかぞめえもん)',
    japanese:
      'やすら[は,わ]で 寝(ね)なましものを さ夜(よ)更(ふ)けて かたぶくまでの 月(つき)を見(み)しかな'
  },
  {
    id: '60',
    name: 'Oeyama Ikuno',
    silaba: 'Ooe',
    romaji: 'Oeyama Ikuno no michi no To kereba Mada fumi mo mizu Ama no Hashidate',
    english: 'By Oe Mountain The road to Ikuno Is far away, And neither have I beheld Nor crossed its bridge of heaven.',
    spanish: 'Por la montaña Oe El camino a Ikuno Es muy lejos, Y ni he visto ni cruzado Su puente celestial.',
    author: 'Koshikibu no Naishi',
    authorJapanese: '小式部内侍(こしきぶのないし)',
    japanese:
      '大江山([おほ,おお]えやま) いく野(の)の道(みち)の 遠(と[ほ,お])ければ まだふみも見(み)ず 天(あま)の橋立(はしだて)'
  },
  {
    id: '61',
    name: 'Inishie',
    silaba: 'Ini',
    romaji: 'Inishie no Nara no miyako no Yae-zakura Kyo kokonoe ni Nioi nuru kana',
    english: 'Eight-fold cherry flowers That at Nara — ancient seat Of our state — have bloomed, In our nine-fold palace court Shed their sweet perfume today.',
    spanish: 'Flores de cerezo de ocho pliegues Que en Nara - antiguo asiento De tu estado - han florecido, En la corte de nuestro palacio nueve veces Derramado su dulce perfume hoy.',
    author: 'Ise no Ōsuke',
    authorJapanese: '伊勢大輔(いせのたいふ)',
    japanese:
      'いにし[へ,え]の 奈良(なら)の都(みやこ)の 八重桜(や[へ,え]ざくら) [けふ,きょう]九重(ここの[へ,え])に 匂(に[ほ,お])[ひ,い]ぬるかな'
  },
  {
    id: '62',
    name: 'Yo',
    silaba: 'Yoo',
    romaji: 'Yo o komete Tori no sorane wa Hakaru tomo Yo ni Osaka no Seki wa yurusaji',
    english: 'The rooster\'s crowing In the middle of the night Deceived the hearers; But at Osaka\'s gateway The guards are never fooled.',
    spanish: 'El gallo canta En medio de la noche Engañó a los oyentes; Pero en la puerta de entrada de Osaka Los guardias nunca se dejan engañar.',
    author: 'Sei Shōnagon',
    authorJapanese: '清少納言(せいしょうなごん)',
    japanese:
      '夜(よ)をこめて 鳥(とり)のそら音(ね)は はかるとも よに逢坂([あふ,あう,おう,おお]さか)の 関(せき)はゆるさじ'
  },
  {
    id: '63',
    name: 'Ima',
    silaba: 'Imawa',
    romaji: 'Ima wa tada Omoi taenan To bakari wo Hito-zute nara de Iu yoshi mo gana',
    english: 'Is there any way Except by a messenger To send these words to you? If I could, I\'d come to you To say goodbye forever.',
    spanish: '¿Hay alguna forma Excepto por medio de un mensajero De enviarte estas palabras? Si pudiera, vendría a ti A decir adiós para siempre.',
    author: 'Sakyō no Daibu Michimasa',
    authorJapanese: '左京大夫道雅(さきょうのだいぶみちまさ)',
    japanese:
      '今(いま)はただ 思(おも)[ひ,い]絶(た)えな[む,ん] とばかりを 人(ひと)づてならで 言(い)[ふ,う]よしもがな'
  },
  {
    id: '64',
    name: 'Asaborake Uji',
    silaba: 'AsaborakeU',
    romaji: 'Asaborake Uji no kawagiri Tae-dae ni Araware wataru Zeze no ajirogi',
    english: 'In the early dawn When the mists on Uji River Slowly lift and clear, From the shallows to the deep, The stakes of fishing nets appear.',
    spanish: 'Al amanecer Cuando las nieblas del río Uji Se levanten lentamente y se aclaren, Desde los bajíos hasta los abismos, Aparecen las apuestas de las redes de pesca.',
    author: 'Gon Chūnagon Sadayori',
    authorJapanese: '権中納言定頼(ごんちゅうなごんさだより)',
    japanese:
      '朝(あさ)ぼらけ 宇治(う[ぢ,じ])の川霧(か[は,わ]ぎり) たえだえに あら[は,わ]れわたる 瀬々(せぜ)の網代木(あじろぎ)'
  },
  {
    id: '65',
    name: 'Urami',
    silaba: 'Ura',
    romaji: 'Urami wabi Hosanu sode da ni Aru mono o Koi ni kuchinan Na koso oshi kere',
    english: 'Even when your hate Makes me stain my sleeves with tears In cold misery, Worse than hate and misery Is the loss of my good name.',
    spanish: 'Incluso cuando tu odio Me hace manchar mis mangas de lágrimas En fría miseria Peor que el odio y la miseria Es la pérdida de mi buen name.',
    author: 'Sagami',
    authorJapanese: '相模(さがみ)',
    japanese:
      '恨(うら)みわび ほさぬ袖(そで)だに あるものを 恋(こ[ひ,い])に朽(く)ちな[む,ん] 名(な)こそ惜([を,お])しけれ'
  },
  {
    id: '66',
    name: 'Morotomo',
    silaba: 'Moro',
    romaji: 'Morotomo ni Aware to omoe Yama-zakura Hana yori hoka ni Shiru hito mo nashi',
    english: 'On a mountain slope, Solitary, uncompanioned, Stands a cherry tree. Except for you, lonely friend, To others I am unknown.',
    spanish: 'En la ladera de una montaña Solitaria, sin compañía, Se encuentra un cerezo. Excepto por ti, amigo solitario Para otros soy un desconocido.',
    author: 'Saki no Daisōjō Gyōson',
    authorJapanese: '前大僧正行尊(さきのだいそうじょうぎょうそん)',
    japanese:
      'もろともに あ[は,わ]れと思(おも)[へ,え] 山桜(やまざくら) 花(はな)よりほかに 知(し)る人(ひと)もなし'
  },
  {
    id: '67',
    name: 'Haru',
    silaba: 'Haruno',
    romaji: 'Haru no yo no Yume bakari naru Tamakura ni Kainaku tatan Na koso oshi kere',
    english: 'If I lay my head Upon his arm in the dark Of a short spring night, This innocent dream pillow Will be the death of my good name.',
    spanish: 'Si recuesto mi cabeza Sobre su brazo en la oscuridad De una corta noche de primavera, Esta almohada de ensueño inocente Será la muerte de mi buen name.',
    author: 'Suō no Naishi',
    authorJapanese: '周防内侍(すおうのないし)',
    japanese:
      '春(はる)の夜(よ)の 夢(ゆめ)ばかりなる 手枕(たまくら)に か[ひ,い]なく立(た)た[む,ん] 名(な)こそ惜([を,お])しけれ'
  },
  {
    id: '68',
    name: 'Kokoro',
    silaba: 'Kokoroni',
    romaji: 'Kokoro ni mo Arade ukiyo ni Nagaraeba Koishikaru beki Yowa no tsuki kana',
    english: 'Though I do not want To live on in this floating world, If I remain here, Let me remember only This midnight and this moonrise.',
    spanish: 'Aunque no quiero Seguir viviendo en este mundo flotante Si me quedo aquí Déjame recordar solo Esta medianoche y esta salida de la luna.',
    author: 'Sanjō In',
    authorJapanese: '三条院(さんじょういん)',
    japanese:
      '心(こころ)にも あらでうき世(よ)に ながら[へ,え]ば 恋(こ[ひ,い])しかるべき 夜半(よ[は,わ])の月(つき)かな'
  },
  {
    id: '69',
    name: 'Arashi',
    silaba: 'Arashi',
    romaji: 'Arashi fuku Mimuro no yama no Momijiba wa Tatsuta no kawa no Nishiki nari keri',
    english: 'By the wind storm\'s blast From Mimuro\'s mountain slopes Maples leaves are torn, Which turn Tatsuta River Into a rich brocade.',
    spanish: 'Por la ráfaga de la tormenta de viento De las laderas de las montañas de Mimir Las hojas de los arces se rompen Que doblan el río Tatsuta En un rico brocado.',
    author: 'Nōin Hōshi',
    authorJapanese: '能因法師(のういんほうし)',
    japanese:
      '嵐(あらし)吹(ふ)く 三室(みむろ)の山(やま)の もみ[ぢ,じ]葉(ば)は 竜田(たつた)の川(か[は,わ])の 錦(にしき)なりけり'
  },
  {
    id: '70',
    name: 'Sabishisa',
    silaba: 'Sa',
    romaji: 'Sabishisa ni Yado o tachi idete Nagamureba Izuko mo onaji Aki no yugure',
    english: 'In my loneliness I leave my little hut. When I look around, Everywhere it is the same: One lone, darkening autumn eve.',
    spanish: 'En mi soledad Dejo mi choza. Cuando miro a mi alrededor En todas partes es igual: Una noche solitaria y oscura de otoño.',
    author: 'Ryōsen Hōshi',
    authorJapanese: '良暹法師(りょうぜんほうし)',
    japanese:
      'さびしさに 宿(やど)を立(た)ち出(い)でて 眺(なが)むれば い[づ,ず]こも同(おな)じ 秋(あき)の夕暮(ゆ[ふ,う]ぐ)れ'
  },
  {
    id: '71',
    name: 'Yu',
    silaba: 'Yuu',
    romaji: 'Yu sareba Kadota no inaba Otozurete Ashi no maroya ni Akikaze zo fuku',
    english: 'When the evening comes, From the rice leaves at my gate, Gentle knocks are heard, And, into my round rush-hut, Enters autumn\'s roaming breeze.',
    spanish: 'Cuando llega la noche De las hojas de arroz a mi puerta Se escuchan golpes suaves, Y, en mi redonda choza de juncos, Entra la brisa errante del otoño.',
    author: 'Dainagon Tsunenobu',
    authorJapanese: '大納言経信(だいなごんつねのぶ)',
    japanese:
      '夕(ゆ[ふ,う])されば 門田(かどた)の稲葉(いなば) おと[づ,ず]れて 芦(あし)のまろやに 秋風(あきかぜ)ぞ吹(ふ)く'
  },
  {
    id: '72',
    name: 'Oto',
    silaba: 'Oto',
    romaji: 'Oto ni kiku Takashi no hama no Adanami wa Kakeji ya sode no Nure mo koso sure',
    english: 'Famous are the waves That break on Takashi beach In noisy arrogance. If I should go near that shore. I would only wet my sleeves.',
    spanish: 'Famosas son las olas Que rompen en la playa de Takashi En ruidosa arrogancia. Si tuviera que acercarme a esa orilla. Solo mojaría mis mangas.',
    author: 'Yūshi Naishinnō-ke no Kii',
    authorJapanese: '祐子内親王家紀伊(ゆうしないしんのうけのきい)',
    japanese:
      '音(おと)に聞(き)く たかしの浜(はま)の あだ波(なみ)は かけじや袖(そで)の 濡(ぬ)れもこそすれ'
  },
  {
    id: '73',
    name: 'Takasago',
    silaba: 'Taka',
    romaji: 'Takasago no Onoe no sakura Saki ni keri Toyama no kasumi Tatazu mo aranan',
    english: 'On that far mountain On the slope below the peak Cherries are in flower. Oh, let the mountain mists Not arise to hide the scene.',
    spanish: 'En esa montaña lejana En la ladera debajo del pico, Las cerezas están en flor. Oh, que no surjan las brumas de la montaña Para ocultar la escena.',
    author: 'Gon Chūnagon Masafusa',
    authorJapanese: '権中納言匡房(ごんちゅうなごんまさふさ)',
    japanese:
      '高砂(たかさご)の 尾([を,お])の上([へ,え])の桜(さくら) 咲(さ)きにけり 外山(とやま)の霞(かすみ) 立(た)たずもあらな[む,ん]'
  },
  {
    id: '74',
    name: 'Ukari',
    silaba: 'Uka',
    romaji: 'Ukari keru Hito o Hatsuse no Yama oroshi Hageshikare to wa Inoranu mono o',
    english: 'It was not for this I prayed at the holy shrine: That she would become As pitiless and as cold As the storms on Hase\'s hills.',
    spanish: 'No fue por esto Recé en el santuario sagrado: Que ella se convertiría Tan despiadado y tan frío Como las tormentas en las colinas de Hase.',
    author: 'Minamoto no Toshiyori Ason',
    authorJapanese: '源俊頼朝臣(みなもとのとしよりあそん)',
    japanese:
      '憂(う)かりける 人(ひと)を初瀬(はつせ)の 山(やま)おろしよ はげしかれとは 祈(いの)らぬものを'
  },
  {
    id: '75',
    name: 'Chigiri',
    silaba: 'Chigirio',
    romaji: 'Chigiri okishi Sasemo ga tsuyu o Inochi ni te Aware kotoshi no Aki mo inumeri',
    english: 'As dew promises New life to the thirsty plant, So did your vow to me. Yet the year has passed away, And autumn has come again.',
    spanish: 'Como promete el rocío Nueva vida a la planta sedienta, Así me lo prometiste. Sin embargo, el año pasó Y el otoño volvió.',
    author: 'Fujiwara no Mototoshi',
    authorJapanese: '藤原基俊(ふじわらのもととし)',
    japanese:
      '契(ちぎ)りおきし させもが露(つゆ)を 命(いのち)にて あ[は,わ]れ今年(ことし)の 秋(あき)もいぬめり'
  },
  {
    id: '76',
    name: 'Wata',
    silaba: 'WatanoharaKo',
    romaji: 'Wata no hara Kogi idete mireba Hisakata no Kumoi ni mago Okitsu shiranami',
    english: 'Over the wide sea As I sail and look around, It appears to me That the white waves, far away, Are the ever shining sky.',
    spanish: 'Sobre el ancho mar Mientras navego y miro a mi alrededor Me parece Que las olas blancas, lejos, Son el cielo siempre brillante.',
    author: 'Hōshōji no Nyūdō Saki no Kanpaku Dajōdaijin',
    authorJapanese:
      '法性寺入道前(ほっしょうじにゅうどうさきの) 関白太政大臣(かんぱくだいじょうだいじん)',
    japanese:
      'わたの原(はら) 漕(こ)ぎ出(い)でて見(み)れば ひさかたの 雲居(くも[ゐ,い])にま[がふ,ごう] 沖(おき)つ白波(しらなみ)'
  },
  {
    id: '77',
    name: 'Se',
    silaba: 'Se',
    romaji: 'Se o hayami Iwa ni sekaruru Takigawa no Warete mo sue ni Awan to zo omou',
    english: 'Though a swift stream is Divided by a boulder In its headlong flow, Though divided, on it rushes, And at last unites again.',
    spanish: 'Aunque un río veloz esté Dividido por una roca En su corriente precipitada, Aunque dividida, se precipita sobre ella Y finalmente se une de nuevo.',
    author: 'Sutoku In',
    authorJapanese: '崇徳院(すとくいん)',
    japanese:
      '瀬(せ)をはやみ 岩(い[は,わ])にせかるる 滝川(たきが[は,わ])の われても末(す[ゑ,え])に あ[は,わ][む,ん]とぞ思(おも)[ふ,う]'
  },
  {
    id: '78',
    name: 'Awaji',
    silaba: 'Awaji',
    romaji: 'Awaji shima Kayou chidori no Naku koe ni Ikuyo nezamenu Suma no sekimori',
    english: 'Guard of Suma Gate, From your sleep, how many nights Have you awakened At the cries of sanderlings, Flying from Awaji Island?',
    spanish: 'Guardia de la puerta de Suma, De tu sueño ¿cuantas noches Te has despertado A los gritos de los sanderlings, Volando desde la isla de Awaji?',
    author: 'Minamoto no Kanemasa',
    authorJapanese: '源兼昌(みなもとのかねまさ)',
    japanese:
      '淡路島(あ[はぢ,わじ]しま) かよ[ふ,う]千鳥(ちどり)の 鳴(な)く声(こ[ゑ,え])に いく夜(よ)寝覚(ねざ)めぬ 須磨(すま)の関守(せきもり)'
  },
  {
    id: '79',
    name: 'Akikaze',
    silaba: 'Akika',
    romaji: 'Akikaze ni Tanabiku kumo no Taema yori More izuru tsuki no Kage no sayakesa',
    english: 'See how clear and bright Is the moonlight finding ways Through the riven clouds That, with drifting autumn wind, Gracefully float in the sky.',
    spanish: 'Mira lo claro y brillante Es la luz de la luna encontrando caminos A través de las nubes desgarradas Que, con el viento otoñal a la deriva, Flota con gracia en el cielo.',
    author: 'Sakyō no Daibu Akisuke',
    authorJapanese: '左京大夫顕輔(さきょうのだいぶあきすけ)',
    japanese:
      '秋風(あきかぜ)に たなびく雲(くも)の 絶(た)え間(ま)より もれ出(い)[づ,ず]る月(つき)の 影(かげ)のさやけさ'
  },
  {
    id: '80',
    name: 'Nagakaran Kokoro',
    silaba: 'Nagaka',
    romaji: 'Nagakaran Kokoro mo shirazu Kurokami no Midarete kesa wa Mono o koso omoe',
    english: 'Is it forever That he hopes our love will last? He did not answer. And now my daylight thoughts Are as tangled as my black hair.',
    spanish: '¿Es para siempre Que él espera que nuestro amor dure? Él no respondió. Y ahora mis pensamientos diurnos Están tan enredados como mi cabello negro.',
    author: 'Taiken-mon\'in no Horikawa',
    authorJapanese: '待賢門院堀河(たいけんもんいんのほりかわ)',
    japanese:
      '長(なが)から[む,ん] 心(こころ)も知(し)らず 黒髪(くろかみ)の 乱(みだ)れて今朝(けさ)は ものをこそ思(おも)[へ,え]'
  },
  {
    id: '81',
    name: 'Hototogisu Nakitsuru',
    silaba: 'Ho',
    romaji: 'Hototogisu Nakitsuru kata o Nagamureba Tada ariake no Tsuki zo nokoreru',
    english: 'When I turned my look Toward the place where I had heard The cuckoo\'s call, The only thing I found Was the moon of early dawn.',
    spanish: 'Cuando volví mi mirada Hacia el lugar donde había escuchado La llamada del cuckoo Lo único que encontré Era la luna del amanecer.',
    author: 'Go Tokudaiji no Sadaijin',
    authorJapanese: '後徳大寺左大臣(ごとくだいじのさだいじん)',
    japanese:
      'ほととぎす 鳴(な)きつる方(かた)を 眺(なが)むれば ただ有明(ありあけ)の 月(つき)ぞ残(のこ)れる'
  },
  {
    id: '82',
    name: 'Omoi',
    silaba: 'Omo',
    romaji: 'Omoi wabi Satemo inochi wa Aru mono o Uki ni taenu wa Namida nari keri',
    english: 'Though in deep distress Through your cruel blow, my life Still is left to me. But I cannot keep my tears; They break forth from my grief.',
    spanish: 'Aunque en profunda angustia Por tu cruel golpe,  aún me queda la vida. Pero no puedo contener mis lágrimas; Rompen de mi dolor.',
    author: 'Dōin Hoshi',
    authorJapanese: '道因法師(どういんほうし)',
    japanese:
      '思(おも)[ひ,い]わび さても命(いのち)は あるものを 憂(う)きに堪(た)[へ,え]ぬは 涙(なみだ)なりけり'
  },
  {
    id: '83',
    name: 'Yo',
    silaba: 'Yononakayo',
    romaji: 'Yo no naka yo Michi koso nakere Omoi iru Yama no oku ni mo Shika zo naku naru',
    english: 'From this world I think That there is nowhere to escape. I wanted to hide In the mountains\' farthest depths; But there I hear the stag\'s cry.',
    spanish: 'De este mundo creo Que no hay ningún lugar al que escapar. Yo quería esconderme En las profundidades más lejanas de las montañas; Pero ahí oigo llorar a los ciervos.',
    author: 'Kōtaigōgu no Daibu Toshinari',
    authorJapanese: '皇太后宮大夫俊成(こうたいごうぐうのだいぶとしなり)',
    japanese:
      '世(よ)の中(なか)よ 道(みち)こそなけれ 思(おも)[ひ,い]入(い)る 山(やま)の奥(おく)にも 鹿(しか)ぞ鳴(な)くなる'
  },
  {
    id: '84',
    name: 'Nagaraeba Mata',
    silaba: 'Nagara',
    romaji: 'Nagaraeba Mata konogoro ya Shinobaren Ushi to mishi yo zo Ima wa koishiki',
    english: 'If I should live long, Then perhaps the present days May be dear to me, Just as past time filled with grief Comes quietly back in thought.',
    spanish: 'Si tuviera que vivir mucho tiempo Entonces tal vez los días presentes Me sean queridos, Así como el pasado lleno de dolor Vuelve silenciosamente al pensamiento.',
    author: 'Fujiwara no Kiyosuke Ason',
    authorJapanese: '藤原清輔朝臣(ふじわらのきよすけあそん)',
    japanese:
      'ながら[へ,え]ば またこのごろや しのばれ[む,ん] 憂(う)しと見(み)し世(よ)ぞ 今(いま)は恋(こ[ひ,い])しき'
  },
  {
    id: '85',
    name: 'Yo',
    silaba: 'Yomo',
    romaji: 'Yo mo sugara Mono omou koro wa Ake yarade Neya no hima sae Tsure nakari keri',
    english: 'Through an unsleeping night Longingly I pass the hours, While the day\'s dawn lags. And now the bedroom shutters Are keeping light and life from me.',
    spanish: 'A través de una noche sin dormir Con nostalgia paso las horas, Mientras el amanecer del día se retrasa. Y ahora las contraventanas del dormitorio Me están ocultando la luz y la vida.',
    author: 'Shun\'e Hōshi',
    authorJapanese: '俊恵法師(しゅんえほうし)',
    japanese:
      '夜(よ)もすがら もの思(おも)[ふ,う]ころは 明(あ)けやらで 閨(ねや)のひまさ[へ,え] つれなかりけり'
  },
  {
    id: '86',
    name: 'Nageke',
    silaba: 'Nageke',
    romaji: 'Nageke tote Tsuki ya wa mono o Omowasuru Kakochi gao naru Waga namida kana',
    english: 'Should I blame the moon For bringing forth this sadness, As if it pictured grief? Lifting up my troubled face, I regard it through my tears.',
    spanish: '¿Debería culpar a la luna Por provocar esta tristeza, Como si representara el dolor? Alzando mi rostro atribulado Lo miro a través de mis lágrimas.',
    author: 'Saigyō Hoshi',
    authorJapanese: '西行法師(さいぎょうほうし)',
    japanese:
      '嘆(なげ)けとて 月(つき)やはものを 思(おも)[は,わ]する かこち顔(が[ほ,お])なる わが涙(なみだ)かな'
  },
  {
    id: '87',
    name: 'Murasame',
    silaba: 'Mu',
    romaji: 'Murasame no Tsuyu mo mada hinu Maki no ha ni Kiri tachinoboru Aki no yugure',
    english: 'An autumn eve: See the valley mists arise Among the fir leaves That still hold the dripping wet Of the chill day\'s sudden showers.',
    spanish: 'Una víspera de otoño: Observa cómo surgen las nieblas del valle Entre las hojas de los abetos Que aún mantienen la humedad De las lluvias repentinas del día frío.',
    author: 'Jakuren Hōshi',
    authorJapanese: '寂蓮法師(じゃくれんほうし)',
    japanese:
      '村雨(むらさめ)の 露(つゆ)もまだひぬ 真木(まき)の葉(は)に 霧(きり)立(た)ちのぼる 秋(あき)の夕暮(ゆ[ふ,う]ぐ)れ'
  },
  {
    id: '88',
    name: 'Naniwae',
    silaba: 'Naniwae',
    romaji: 'Naniwae no Ashi no karine no Hitoyo yue Mi o tsukushite ya Koi wataru beki',
    english: 'After one brief night — Short as a piece of the reeds Growing in Naniwa bay — Must I forever long for him With my whole heart, till life ends?',
    spanish: 'Después de una breve noche Corto como un trozo de junco Creciendo en la bahía de Naniwa - ¿Debo anhelarlo por siempre Con todo mi corazón, hasta que la vida termine?',
    author: 'Kōka-Mon\'in no Bettō',
    authorJapanese: '皇嘉門院別当(こうかもんいんのべっとう)',
    japanese:
      '難波江(なに[は,わ]え)の 芦(あし)のかりねの ひとよゆ[ゑ,え] みをつくしてや 恋(こ)[ひ,い]わたるべき'
  },
  {
    id: '89',
    name: 'Tama',
    silaba: 'Tama',
    romaji: 'Tama no o yo Taenaba taene Nagaraeba Shinoburu koto no Yowari mo zo suru',
    english: 'Like a string of gems Grown weak, my life will break now; For if I live on, All I do to hide my love May at last grow weak and fail.',
    spanish: 'Como una cadena de gemas debilitada, Mi vida se romperá ahora; Porque si sigo viviendo, Todo lo que haga para ocultar mi amor Puede finalmente debilitarse y fallar.',
    author: 'Shokushi Naishinnō',
    authorJapanese: '式子内親王(しょくしないしんのう)',
    japanese:
      '玉(たま)の緒([を,お])よ 絶(た)えなば絶(た)えね ながら[へ,え]ば 忍(しの)ぶることの 弱(よわ)りもぞする'
  },
  {
    id: '90',
    name: 'Misebaya',
    silaba: 'Mise',
    romaji: 'Misebaya na Ojima no ama no Sode dani mo Nure ni zo nureshi Iro wa kawarazu',
    english: 'Let me show him these! Even the fishermen\'s sleeves On Ojima\'s shores, Though wet through and wet again, Do not so change their colors.',
    spanish: '¡Déjame mostrarle estos! Incluso las mangas de los pescadores, En las costas de Ojima, Aunque mojadas y mojadas de nuevo, No cambien sus colores.',
    author: 'Inpu-Mon\'in no Taifu',
    authorJapanese: '殷富門院大輔(いんぷもんいんのたいふ)',
    japanese:
      '見(み)せばやな 雄島([を,お]じま)の海人(あま)の 袖(そで)だにも 濡(ぬ)れにぞ濡(ぬ)れし 色(いろ)は変(か)[は,わ]らず'
  },
  {
    id: '91',
    name: 'Kirigirisu Naku',
    silaba: 'Kiri',
    romaji: 'Kirigirisu Naku ya shimo yo no Samushiro ni Koromo katashiki Hitori kamo nen',
    english: 'In my cold bed, Drawing close my folded quilt, I sleep alone, While all through the frosty night I hear a cricket\'s lonely sound.',
    spanish: 'En mi cama fría Acercándome a mi colcha doblada Duermo sola, Mientras toda la noche helada Escucho el sonido solitario de un grillo.',
    author: 'Go Kyōgoku no Sesshō Saki no Dajōdaijin',
    authorJapanese:
      '後京極摂政前(ごきょうごくせっしょうさきの) 太政大臣(だいじょうだいじん)',
    japanese:
      'きりぎりす 鳴(な)くや霜夜(しもよ)の さむしろに 衣(ころも)かたしき ひとりかも寝(ね)[む,ん]'
  },
  {
    id: '92',
    name: 'Waga',
    silaba: 'Wagaso',
    romaji: 'Waga sode wa Shiohi ni mienu Oki no ishi no Hito koso shirane Kawaku ma mo nashi',
    english: 'Like a rock at sea, At ebb-tide hidden from view, Is my tear-drenched sleeve: Never for a moment dry, And no one knows it is there.',
    spanish: 'Como una roca en el mar En la marea baja oculta a la vista, Es mi manga empapada de lágrimas: Nunca por un momento seco Y nadie sabe que está ahí.',
    author: 'Nijō In no Sanuki',
    authorJapanese: '二条院讃岐(にじょういんのさぬき)',
    japanese:
      'わが袖(そで)は 潮干(し[ほ,お]ひ)に見(み)えぬ 沖(おき)の石(いし)の 人(ひと)こそ知(し)らね 乾(かわ)く間(ま)もなし'
  },
  {
    id: '93',
    name: 'Yo',
    silaba: 'Yononakawa',
    romaji: 'Yo no naka wa Tsune ni mo ga mo na Nagisa kogu Ama no obune no Tsuna de kanashi mo',
    english: 'If only our world Could be always as it is! How moving the sight Of the little fishing boat Drawn by ropes along the bank.',
    spanish: '¡Si nuestro mundo Pudiera ser siempre como es! Qué conmovedora la vista Del pequeño barco pesquero Tirado por cuerdas a lo largo de la orilla.',
    author: 'Kamakura no Udaijin',
    authorJapanese: '鎌倉右大臣(かまくらのうだいじん)',
    japanese:
      '世(よ)の中(なか)は 常(つね)にもがもな 渚(なぎさ)こぐ 海人(あま)の小舟([を,お]ぶね)の 綱手(つなで)かなしも'
  },
  {
    id: '94',
    name: 'Miyoshino',
    silaba: 'Miyo',
    romaji: 'Miyoshino no Yama no akikaze Sayo fukete Furusato samuku Koromo utsu nari',
    english: 'From Mount Yoshino Blows a chill, autumnal wind. In the deepening night The ancient village shivers: Sounds of beating cloth I hear.',
    spanish: 'Desde el monte Yoshino Sopla un viento otoñal frío. En la noche cada vez más profunda El pueblo antiguo se estremece: Escucho sonidos de tela golpeando.',
    author: 'Sangi Masatsune',
    authorJapanese: '参議雅経(さんぎまさつね)',
    japanese:
      'み吉野(よしの)の 山(やま)の秋風(あきかぜ) さ夜(よ)更(ふ)けて ふるさと寒(さむ)く 衣(ころも)うつなり'
  },
  {
    id: '95',
    name: 'Okenaku Ukiyo',
    silaba: 'Ooke',
    romaji: 'Okenaku Ukiyo no tami ni Ou kana Waga tatsu soma ni Sumizome no sode',
    english: 'From the monastery On Mount Hiei I look out On this world of tears, And though I am unworthy, I shield it with my black sleeves.',
    spanish: 'Del monasterio En el monte Hiei miro En este mundo de lágrimas Y aunque soy indigno Lo protejo con mis mangas negras.',
    author: 'Daisōjō Jien',
    authorJapanese: '前大僧正慈円(さきのだいそうじょうじえん)',
    japanese:
      'お[ほ,お]けなく うき世(よ)の民(たみ)に お[ほ,お][ふ,う]かな わが立(た)つ杣(そま)に すみぞめの袖(そで)'
  },
  {
    id: '96',
    name: 'Hana',
    silaba: 'Hanasa',
    romaji: 'Hana sasou Arashi no niwa no Yuki nara de Furi yuku mono wa Waga mi nari keri',
    english: 'Not the snow of flowers, That the hurrying wild wind whirls Round the garden court: What withers and falls away In this place is I myself.',
    spanish: 'No la nieve de las flores, Que el viento salvaje apresurado gira Alrededor del patio del jardín: Lo que se seca y se cae En este lugar soy yo mismo.',
    author: 'Nyūdo Saki no Dajōdaijin',
    authorJapanese: '入道前太政大臣(にゅうどうさきのだいじょうだいじん)',
    japanese:
      '花(はな)さそ[ふ,う] 嵐(あらし)の庭(に[は,わ])の 雪(ゆき)ならで ふりゆくものは わが身(み)なりけり'
  },
  {
    id: '97',
    name: 'Konu',
    silaba: 'Konu',
    romaji: 'Konu hito o Matsuho no ura no Yunagi ni Yaku ya moshio no Mi mo kogare tsutsu',
    english: 'Like the salt sea-weed, Burning in the evening calm. On Matsuo\'s shore, All my being is aflame, Awaiting her who does not come.',
    spanish: 'Como la alga marina salada, Ardiendo en la calma de la tarde. En la orilla de Matsuo, Todo mi ser está en llamas Esperando a la que no viene.',
    author: 'Gon Chūnagon Sadaie',
    authorJapanese: '権中納言定家(ごんちゅうなごんさだいえ)',
    japanese:
      '来(こ)ぬ人(ひと)を まつほの浦(うら)の 夕(ゆ[ふ,う])なぎに 焼(や)くや藻塩(もし[ほ,お])の 身(み)もこがれつつ'
  },
  {
    id: '98',
    name: 'Kaze',
    silaba: 'Kazeso',
    romaji: 'Kaze soyogu Nara no ogawa no Yugure wa Misogi zo natsu no Shirushi nari keru',
    english: 'To Nara\'s brook comes Evening, and the rustling winds Stir the oak-trees\' leaves. Not a sign of summer left But the sacred bathing there.',
    spanish: 'Al arroyo de Nara viene Tarde y el susurro de los vientos Remueve las hojas de los robles. No queda ni una señal de verano, Sino el baño sagrado allí.',
    author: 'Ju\'nii Ietaka',
    authorJapanese: '従二位家隆(じゅにいいえたか)',
    japanese:
      '風(かぜ)そよぐ ならの小川([を,お]が[は,わ])の 夕暮(ゆ[ふ,う]ぐ)れは みそぎぞ夏(なつ)の しるしなりける'
  },
  {
    id: '99',
    name: 'Hito',
    silaba: 'Hitomo',
    romaji: 'Hito mo oshi Hito mo urameshi Ajiki naku Yo o omou yue ni Mono omou mi wa',
    english: 'For some men I grieve; Some men are hateful to me; And this wretched world To me, with all my sadness, Is a place of misery.',
    spanish: 'Por algunos hombres lamento; Algunos hombres me odian; Y este miserable mundo A mi, con toda mi tristeza, Es un lugar de miseria.',
    author: 'Gotoba In',
    authorJapanese: '後鳥羽院(ごとばいん)',
    japanese:
      '人(ひと)も[を,お]し 人(ひと)も恨(うら)めし あ[ぢ,じ]きなく 世(よ)を思(おも)[ふ,う]ゆ[ゑ,え]に もの思(おも)[ふ,う]身(み)は'
  },
  {
    id: '100',
    name: 'Momoshiki',
    silaba: 'Momo',
    romaji: 'Momoshiki ya Furuki nokiba no Shinobu ni mo Nao amari aru Mukashi nari keri',
    english: 'In this ancient house, Paved with a hundred stones, Ferns grow in the eaves; But idus as they are, My old memories are more.',
    spanish: 'En esta casa antigua Pavimentado con cien piedras, Los helechos crecen en los aleros; Pero idsos como son, Mis viejos recuerdos son más. ',
    author: 'Juntoku In',
    authorJapanese: '順徳院(じゅんとくいん)',
    japanese:
      'ももしきや 古(ふる)き軒端(のきば)の しのぶにも な[ほ,お]あまりある 昔(むかし)なりけり'
  }
]