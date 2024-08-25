"use client";
import React from "react";
import styles from "@/styles/paymentMenthod.module.scss";

function PaymentMethod() {
  return (
    <div className="container">
      <p>
        Home / Tyre Dealers / Tyre Dealers Ghaziabad / SHREE HEMKUNT TYRES AND
        SERVICES
      </p>
      <div className="d-flex flex-column section-container">
        <h5>Payment Method</h5>
        <div className="d-flex flex-wrap py-3 px-0 px-md-3">
          <div className={`d-flex flex-column col-12 col-md-3 `}>
            <ul className={styles.checklist__list}>
              <li className="text-primary">Deposit to Account</li>
              <li className="text-primary">Credit Card/Debit Card</li>
              <li className="text-primary">Wallets (PayTM/PhonePe/Amazon etc.)</li>
            </ul>
          </div>
          <div
            className={`d-flex flex-column mt-3 mt-md-0 ms-md-4  col-12 col-md-3 `}
          >
            <ul className={styles.checklist__list}>
              <li className="text-primary">Net Banking</li>
              <li className="text-primary">UPI</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
