interface Members {
  name: string;
  image: string;
}
const members: Members[] = [
  { name: "Darthcoin", image: "darthcoin.jpg" },
  { name: "Nitesh", image: "nitesh.jpg" },
  { name: "Kevin Cai", image: "kevincai.jpg" },
  { name: "Eternalkr", image: "eternalkr.jpg" },
  { name: "fiatjaf", image: "fiatjaf.jpg" },
  { name: "softsimon", image: "softsimon.jpg" },
  { name: "Brandon Holm", image: "brandonholm.jpg" },
  { name: "lunaticoin", image: "lunaticoin.jpg" },
  { name: "erikb", image: "erikb.jpg" },
  { name: "ColBitcoin", image: "colbitcoin.jpg" },
  { name: "osito", image: "osito.jpg" },
  { name: "jc", image: "jc.jpg" },
  { name: "B S", image: "bs.jpg" },
  { name: "Bitcoin Vietnam", image: "bitcoinvn.jpg" },
  { name: "Juan Angel", image: "juanangel.jpg" },
  { name: "Mark-Steven", image: "marksteven.jpg" },
  { name: "Thomas Jestopher", image: "thomasjestopher.jpg" },
  { name: "Future Travel", image: "futuretravel.jpg" },
  { name: "Bitcoin Gamer 21", image: "bitcoingamer.jpg" },
  { name: "Christaman", image: "christaman.jpg" },
  { name: "Noé Lopez", image: "noelopez.jpg" },
  { name: "Kote", image: "kote.jpg" },
  { name: "Hurly", image: "hurly.jpg" },
  { name: "daniele", image: "daniele.jpg" },
  { name: "w", image: "w.jpg" },
  { name: "asi0", image: "asi0.jpg" },
];

export default function BlixtCommunity() {
  return (
    <div className="blixt-community">
      <div className="hampus" title="Hampus Sjöberg">
        <img src="/blixt/hampus.jpg" />
      </div>
      <div className="blixt-contributors">
        <div className="community-members">
          {members.map((member, i) => (
            <div key={i} className="community-member" title={member.name}><img src={`/blixt/${member.image}`} /></div>
          ))}
        </div>
      </div>
    </div>
  )
}
