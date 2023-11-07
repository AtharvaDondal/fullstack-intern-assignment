
import { ImSpoonKnife } from "react-icons/im";


export default function Navbar() {
  
  // const [show, setShow] = useState(false)

  // const handleShow = () => {
  //   if(show === true){
  //     setShow(false)
  //   }else{
  //     setShow(true)
  //   }
  // }

  return (
    <div>
      <header
        className="header"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        }}
      >
        <div className="layer">
          <div className="container">
            <nav className="logo-wrapper">
              <div className="logo">
                <ImSpoonKnife className="brand" />
              </div>
              {/* <div className="addRecipe">
                <button className="addRecipebtn" onClick={()=> handleShow()}><b> Add your Recipe Now..!  </b></button>
                    {
                      show && (<AddRecipe />)
                      
                    }
              </div> */}
            </nav>
            <div className="header-text">
              <h1>Recipes</h1>
              <p>
                Check out our featured recipe for today! This recipe is the most
                popular and trendy recipe that you’d definitely want to give a
                try! ..
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
