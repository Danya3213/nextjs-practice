import cl from './transaction.module.scss'
import {Top} from "./Components/Top/Top";
import {List} from "@authPages/(transactions)/Components/List/List";

export default function Home() {

  return (
      <section>
          <div className={cl.container}>
              <Top />
              <List/>
          </div>
      </section>
  );
}
