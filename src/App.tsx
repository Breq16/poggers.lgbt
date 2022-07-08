import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USERS = [
  {
    name: "Brooke",
    twitter: "breqdev",
    email: "breq",
  },
  {
    name: "Ava",
    twitter: "Avaaa_42",
    email: "ava",
  },
  {
    name: "Quartz",
    twitter: "piezo_electric",
    email: "shockedquartz",
  },
  {
    name: "Marissa",
    twitter: "m4r1ss4m",
    email: "marissa",
  },
  {
    name: "Ezgi",
    twitter: "ezgiburglar69",
    email: "ezgi",
  },
  {
    name: "Public Universal Blahaj",
    twitter: "girlbossmoder",
    email: "blahaj",
  },
];

function App() {
  return (
    <article className="bg-rainbow-stripes min-h-screen p-4 sm:p-8">
      <div className="bg-white border-black border-2 rounded-3xl w-full max-w-xl mx-auto p-8 text-4xl text-center font-bold mb-8">
        poggers.lgbt user directory
      </div>
      <ul className="flex flex-col gap-4 w-full max-w-xl mx-auto">
        {USERS.map((user) => (
          <li
            key={user.email}
            className="bg-white border-black border-2 rounded-3xl p-8 flex flex-col sm:flex-row text-center sm:text-left gap-2"
          >
            <span className="sm:w-2/3 text-5xl">{user.name}</span>
            <div className="sm:w-full flex flex-col text-lg">
              <a
                href={`mailto:${user.email}@poggers.lgbt`}
                className="truncate"
              >
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                <span className="font-bold">{user.email}</span>@poggers.lgbt
              </a>
              <a
                href={`https://twitter.com/${user.twitter}`}
                className="truncate"
              >
                <FontAwesomeIcon icon={faTwitter} /> @{user.twitter}
              </a>
            </div>
          </li>
        ))}
      </ul>
      <div className="bg-white border-black border-2 rounded-3xl w-full max-w-xl mx-auto p-8 mt-8 text-center">
        made with <FontAwesomeIcon icon={faHeart} /> by{" "}
        <a href="https://breq.dev/" className="underline">
          breq
        </a>
        . let her know if you want your own!
      </div>
    </article>
  );
}

export default App;
