import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { selectUser } from "../features/counter/userSlice";
import "./ProfileScreen.css";
import { auth } from "../firebase";

function ProfileScreen() {
const user= useSelector(selectUser);


  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
      
      <div className="profileScreen__info">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEWFpz7///+BpDWDpjuApDR8oSl+oi57oSb8/fmvxIqJqkF/oy34+vS2yY3q8N7R3bqOrkrw9Onj69Xr8OGvxYKYtV709/CzyIm7zpbz9+vW4cLO27Wgum2Ws1qTsVSPr03D1KXf6M6ct2apwnu4zJTB0qHT3sGatmTK2K6iu3OCWtI8AAAEMUlEQVR4nO3c63aiPBQGYMgOkS+gnJEiIii2eP83+ImddjyQmSoZsF3v86P9t9feOZCIiYYBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPCNEXExm80szibOgwnrmIZgpDuu8ZbVaZqGVeFPWCOxMvaiNI28uCStNbJlbX5YZFJz+309je3K/kjDbROhLTBx7zNwJ5yoG61lep5GEAtNTc2SyLyUFlOUKL2rNMyW64nsLK4jm2k5folWe5OGmTkaAhPdNF03Gf2x5yLb9aTh7jS0NNvZPaHNauROpM3tSDK7R8Lw0KLui2wG5bidyJreNMzhnUib/shmPG4nit4uNM3aGhqZzRUV5vpWo68gRRq2HBpZ5IrQ6UxH4l/FClWFxdDZYl2vhfoa7x5sqUjDnA+dLeoKN2M+atQV7oeu+j+/D5Xz0H2SeTh4ueCZIvTIz1L5z4YSlYrQy5HXQ8VsCQevh6o9zcuT7Gk0bDwUc7wdeedN66AvjYWGfSkZfc+aaPzPFn0tbWvZO5J/OwXsZPzPh87qtsK9nscd275cBXZHfsy8kzeDydM1kJh/GTsqx10pPsz27nka6Vzjqyhqfn94cfebqd4n8uKsqfNCazszKtqgs9oZul/G3pMGW2dhl0adbfS/ExaW9KUjpn7nzR3u+8c/0zUzAAAAAAAAAAAAAAAA/DwkJv8m7J8ikbSv3px+ao2Mkvx0OjvYTvtFIgnpS123Is7COsXn1ZKXtylLZGUeBIHn6/1CmrEkPzuy4E1zbOKEL98b2q5KTVc/uqB+XF+eORl+su1RJD9bOlrq+eKdCdksrm9HjHqU9wI/v4qSNuXQGon7h55zUeaoR3kvyMsLBFG7th6ekER8llRhT33my6hHeS/411ck7HC3YY8Uybgss9Dtq0/DMeiHkdFzCeRltdw496XEhH+o6t6rSZ12ukFq8KovIzuol1LwY1/+tTOJMS5k7EWK3jtyG2PC5ZCc6zONZ13ZHEo61qlKj5hw/PWu8VRXBU6CjE97Nopt/5Cfuwi9ptg4M0d0PfqBC2FZM5nE7WsYKYfmezNla33L7IOIKvUA+yUNvbaaHx0O3d+sXf2tshM7iqc8Qvgb3/atYMPlS5q8/35h7KB+Dj7IbgvjmT40MSvxes/ZP1he3UjtvzcwFLG3SvlYvbO+6iCfZXheOO65itehRdpBXsye+L0Fc5JGdUvsKxaruHzi8k6IURnn6f3PHTsNs8R4aEc7OmKO3LX5PeM1ylfxxvpWx7oZN9ZFs1Lczb4QtvPt2lDv7Z4WnX7shiXxvg7DKHIv9j22m0aLsPay3cbpfoZG74+0jIrouAkluU4OxX+dqmq6f4dDsS4l/8Ou/HuhrtCzfXf35zt3GwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjOF/yuszsUKzmWMAAAAASUVORK5CYII="
          alt="avatar"
        />
        <div className="profileScreen__deatails">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
            <h3>Plans</h3>
                <button
                onClick={() => auth.signOut()} className="profileScreen__signout">Sign Out</button>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
