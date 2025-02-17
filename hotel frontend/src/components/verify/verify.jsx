import React, { useEffect } from 'react'
import './verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'

const Verify = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')
    const nav = useNavigate()
    const verifyPayment = async () => {
        try {
            const res = await axios.post('http://localhost:2004/api/verifyOrder', { success, orderId })
            if (res.data.success) {
                nav('/myOrder')

            }
            else {
                nav('/headLogin')
            }
        }
        catch (error) {
            console.error("Payment verification failed:", error);
            nav('/headLogin')

        }
    }
    useEffect(() => {
        verifyPayment()
    }, [])

    return (
        <>
            <div className="verify">
                <div className="spinner">

                </div>
            </div>


        </>
    )
}

export default Verify
