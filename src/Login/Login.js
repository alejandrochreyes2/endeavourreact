import React from 'react';

function Login() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundImage: 'url("https://aerocivilsgdeatest.com/ControlDocTest/App_Images/Fondos/imgControlDoc.jpg")', 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <form
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    padding: '30px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                    width: '300px'
                }}
            >

                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <img
                        src="https://aerocivilsgdeatest.com/ControlDocTest/App_Images/Logos/Aerocivil.png"
                        alt="Logo Aerocivil"
                        style={{ width: '100px', height: 'auto' }}
                    />
                </div>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
                    Iniciar Sesi&#243;n
                </h2>


                <div style={{color:'blue' }}>AMBIENTE DE PRUEBA</div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Usuario - Login</label>
                    <input
                        type="text"
                        style={{
                            width: '100%',
                            padding: '8px',
                            marginTop: '5px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label>Contrase&#241;a:</label>
                    <input
                        type="password"
                        style={{
                            width: '100%',
                            padding: '8px',
                            marginTop: '5px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>

                <button
                    type="button"
                    style={{
                        width: '100%',
                        padding: '10px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px'
                    }}
                >
                    INGRESAR AL SISTEMA
                </button>

                <button type="button"
                    style={{
                        width: '100%',
                        padding: '10px',
                        backgroundColor: 'green',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        marginTop: '10px'
                    }}>
                    INFORMACI&#211;N
                </button>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <img
                        src="https://aerocivilsgdeatest.com/ControlDocTest/App_Images/Logos/logocontroldoc.png"
                        alt="Logo Aerocivil"
                        style={{ width: '100px', height: 'auto' }}
                    />
                </div>
                <div>2025V1-TFS-13557</div>

               
            </form>
        </div>
    );
}

export default Login;
