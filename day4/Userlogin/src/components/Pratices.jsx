import React,{useState} from 'react'
import styles from "./Login.module.css";
export default function Pratices() {
    let [user, setUser] = useState("")
    let [Pass, setPass] = useState("")
    let [login, setLogin] = useState(false)
    let handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name == "user") {
            setUser(value);
        }
        if (name == "Pass") {
            setPass(value);
        }
    };
    let handleSubmit = (e) => {
        e.preventDefault();
        setLogin(true);
        console.log(`welcome ${user} your password is ${Pass}`)
    }
    return (
        <>
            {!login && <div className={styles.login}>
                <p>Please login</p>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name="user"
                        id={styles.user}
                        placeholder='Username'
                        onChange={handleChange}
                    />
                    <input
                        type='Password'
                        name="Pass"
                        id={styles.pass}
                        placeholder='Password'
                        onChange={handleChange}
                    />
                    <button className={styles.btn}>login</button>
                    <p className={styles.option}>I dont have account</p>
                </form>
            </div>}
             {login && <div>
                <p>{`Welcome ${user}, now you can explore our services`}</p>
            </div>}
        </>

    )
}
