import React from "react";

const Home = () => {
    const modules = [
        {
            title: "Medicine Inventory",
            desc: "Manage medicines, stock levels, expiry dates and pricing in one place.",
        },
        {
            title: "Medicine Sales",
            desc: "Record sales transactions and maintain accurate billing history.",
        },
        {
            title: "Supplier Management",
            desc: "Maintain supplier records and track medicine supply sources.",
        },
    ];

    return (
        <div style={styles.home}>

            {/* Hero */}
            <section style={styles.hero}>
                <p style={styles.tag}>
                    Pharmacy Operations Platform
                </p>

                <h1 style={styles.heading}>
                    Pharmacy Management System
                </h1>

                <p style={styles.subtitle}>
                    A simple system for managing medicine inventory,
                    sales and supplier records efficiently.
                </p>
            </section>


            {/* Info */}
            <section style={styles.info}>

                <div style={styles.infoBox}>
                    <h3>Inventory</h3>
                    <p>Stock management</p>
                </div>

                <div style={styles.infoBox}>
                    <h3>Sales</h3>
                    <p>Billing records</p>
                </div>

                <div style={styles.infoBox}>
                    <h3>Suppliers</h3>
                    <p>Supplier information</p>
                </div>

            </section>


            {/* Modules */}
            <section style={styles.modules}>

                <h2 style={styles.sectionTitle}>
                    Our Modules
                </h2>

                <p style={styles.sectionText}>
                    Manage pharmacy operations in a simple and organized way.
                </p>


                <div style={styles.cardContainer}>

                    {modules.map((item, index) => (
                        <div style={styles.card} key={index}>

                            <div style={styles.number}>
                                {index + 1}
                            </div>

                            <h3 style={styles.cardTitle}>
                                {item.title}
                            </h3>

                            <p style={styles.cardText}>
                                {item.desc}
                            </p>

                        </div>
                    ))}

                </div>

            </section>


            {/* Footer */}
            <footer style={styles.footer}>

                <h3>
                    Pharmacy Management System
                </h3>

                <p>
                    Medicine Inventory · Medicine Sales · Supplier Management
                </p>

            </footer>

        </div>
    );
};


const styles = {

    home: {
        minHeight: "100vh",
        background: "#ecfdf5",
        fontFamily: "Arial, sans-serif",
    },


    hero: {
        background: "#16a085",
        color: "white",
        textAlign: "center",
        padding: "80px 20px",
    },


    tag: {
        fontSize: "14px",
        letterSpacing: "2px",
        textTransform: "uppercase",
        color: "#d1fae5",
    },


    heading: {
        fontSize: "45px",
        margin: "15px 0",
        fontWeight: "700",
    },


    subtitle: {
        maxWidth: "650px",
        margin: "auto",
        fontSize: "18px",
        lineHeight: "1.7",
        color: "#f0fdf4",
    },


    info: {
        display: "flex",
        justifyContent: "center",
        gap: "25px",
        padding: "35px 20px",
        background: "#ffffff",
        flexWrap: "wrap",
    },


    infoBox: {
        width: "220px",
        padding: "20px",
        textAlign: "center",
        background: "#d1fae5",
        borderRadius: "12px",
        color: "#065f46",
    },


    modules: {
        padding: "60px 20px",
        textAlign: "center",
    },


    sectionTitle: {
        fontSize: "32px",
        color: "#065f46",
    },


    sectionText: {
        color: "#555",
        marginBottom: "40px",
    },


    cardContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "25px",
        flexWrap: "wrap",
    },


    card: {
        background: "white",
        width: "300px",
        padding: "30px",
        borderRadius: "15px",
        textAlign: "left",
        boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
        borderTop: "5px solid #10b981",
    },


    number: {
        width: "35px",
        height: "35px",
        background: "#10b981",
        color: "white",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
    },


    cardTitle: {
        marginTop: "20px",
        color: "#064e3b",
    },


    cardText: {
        color: "#666",
        lineHeight: "1.6",
    },


    footer: {
        background: "#065f46",
        color: "white",
        textAlign: "center",
        padding: "25px",
    },

};

export default Home;