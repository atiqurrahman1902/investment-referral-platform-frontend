function DashboardCards() {

    const cards = [

        {
            title:"Wallet Balance",
            amount:"₹0",
            icon:"💳",
            color:"#2563eb"
        },

        {
            title:"Total Investment",
            amount:"₹0",
            icon:"💰",
            color:"#16a34a"
        },

        {
            title:"Total ROI",
            amount:"₹0",
            icon:"📈",
            color:"#7c3aed"
        },

        {
            title:"Referral Income",
            amount:"₹0",
            icon:"👥",
            color:"#f97316"
        }

    ];

    return(

        <div className="cards-grid">

            {

                cards.map((card,index)=>(

                    <div
                        className="dashboard-card"
                        key={index}
                    >

                        <div>

                            <h4>

                                {card.title}

                            </h4>

                            <h2>

                                {card.amount}

                            </h2>

                        </div>

                        <div
                            className="dashboard-icon"
                            style={{
                                background:card.color
                            }}
                        >

                            {card.icon}

                        </div>

                    </div>

                ))

            }

        </div>

    )

}

export default DashboardCards;