import cl from './transaction.module.scss'
import {Top} from "./Components/Top/Top";
import {List} from "./Components/List/List";
import {AddButton} from "./Components/AddButton/AddButton";

export default function Home() {

  return (
          <section className={cl.main}>
              <div className={cl.container}>
                  <Top />
                  <List/>
                  <AddButton/>
              </div>
          </section>
  );
}
