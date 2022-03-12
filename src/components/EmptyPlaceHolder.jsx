import React, { useMemo, useEffect, useState } from "react";

const styles = {
    placeholder: {

        fontSize: "120px",
        color: "#ccc",
        width: 200,
        height: 190,
        display: "flex",
        position: 'relative',
        top: '-2%',
        left: '5%',
        marginBottom: '10%',

        border: "2px solid #00ff00",

        justifyContent: "center", 
        userSelect: 'none',
    },
    placeholderText :{
        margin: 'auto',
        userSelect: 'none',
    }

}

export default function EmptyPlaceHolder() {
    return (
        <div style={styles.placeholder}>
            <div style={styles.placeholderText}>
                +
            </div>
        </div>
    )

}