// I)What is conditional Rendering?
//  Its a way to show different component based on different conditions.
//  For example:
//    -Show a login button if the user isn't logged in.
//    -Show an error message only when there is an error.


//  II)Ways of conditional rendering:
//    We have multiple ways for conditional rendering: 
//    1- Using if statement: create for completelydifferent renders or returning null.
export const UserProfile = ({ name, isOnline }) => {
   if(isOnline) {
        return (
            <div>
                <h3>{name}</h3>
                <span>Online</span>
                <p>Available for chat</p>
                <button>Send Message</button>
            </div>
        );
   }
};

//   2- Using ternary operator(?:): perfect for either/or situation
export const UserProfile2 = ({ name, isOnline }) => {
   return (
            <div>
                <h3>{name}</h3>
                <span>{isOnline ? "Online" : "Offline"}</span>
                <p>Available for chat</p>
                <button>Send Message</button>
            </div>
        );
};

//   3- Using AND operator(&&): Ideal for show/hide scenario
export const UserProfile3 = ({ name, isOnline, isPremium }) => {
   return (
            <div>
                <h3>{name}
                    {isPremium && <span>⭐️</span>}
                </h3>
                <span>{isOnline ? "Online" : "Offline"}</span>
                <p>Available for chat</p>
                <button>Send Message</button>
            </div>
        );
};

//  4- Using variables: best for complex logic that would make JSX messy:
export const UserProfiler4 = ({ name, isOnline, isPremium, role }) => {

    let roleBadge = null;
    if(role === "admin") {
        roleBadge = <span>🔑 Admin</span>;
    } else if(role === "moderator") {
        roleBadge = <span>👮🏿‍♂️ Moderator</span>;
    } else if(role === "vip") {
        roleBadge = <span>💎 VIP</span>;
    }

   return (
        <div>
            <h3>{name}
                {isPremium && <span>⭐️</span>}
            </h3>
            <span>{isOnline ? "Online" : "Offline"}</span>
            <p>Available for chat</p>
            <button>Send Message</button>
        </div>
    );
};
