import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function Infoblock({ heading }) {
  return (
    <section className="bg-theme my-2 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
              possimus laudantium minus molestias quis qui perferendis atque at
              a pariatur nulla sint cupiditate quae officiis, ratione distinctio
              commodi iusto! Veniam error sint tempore iusto fugit sunt
              consectetur enim eligendi? Veritatis mollitia a doloribus.
              Reiciendis a voluptatibus alias ducimus doloribus dolor maxime,
              aliquid quos natus eius, corporis delectus accusantium error
              libero?
            </p>
            <Link to="/about">
              <button className="btn btn-outline-warning btn-lg">
                {heading}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
