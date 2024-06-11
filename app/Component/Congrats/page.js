import Link from "next/link";
import "./Congrats.css";
export default function page() {
  return (
    <>
      <div className="overall-congrats">
        <div className="congrats-svg">
          <img src="/congrats.svg" />
          <h2>Congratulations</h2>
          <p>
            Music Collectable has been uploaded & can be found under Music
            collections in your profile.
          </p>
          <Link href="/Component/Preview">
            <button>Done for now</button>
          </Link>
        </div>
      </div>
    </>
  );
}
