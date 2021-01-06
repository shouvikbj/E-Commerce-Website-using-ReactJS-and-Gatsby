import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function Dualinfoblock({ heading }) {
  return (
    <section className="my-2 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-lg-7 col-sm-12 mx-auto">
            <p className="lead text-white mb-4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              similique quasi nemo saepe, culpa repellat ducimus repellendus id
              nostrum ad, perferendis error iure, in cupiditate deleniti fuga
              nam non aspernatur. Voluptate nam vero dolore unde, consectetur
              nulla commodi repudiandae sapiente cupiditate necessitatibus
              incidunt quaerat temporibus est. Quae eos reiciendis, excepturi
              natus, in laboriosam unde dolore vel magnam sint cum tenetur.
              Culpa velit asperiores, nam officiis neque fuga doloremque
              perferendis sunt rerum iusto cupiditate repellendus quaerat harum
              debitis? Magnam cumque aspernatur nesciunt esse dicta voluptatum
              maiores, nostrum libero doloremque a consequuntur excepturi earum.
              Rerum temporibus deleniti beatae debitis. Laudantium, commodi
              aspernatur.
            </p>
          </div>
          <div className="col-lg-5 col-sm-12">
            <div className="card bg-dark">
              <img
                src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="card-img-top"
                alt="goes here"
              />
              <div className="card-body text-white">
                <h5 className="card-title text-warning">Just Click Photos</h5>
                <p className="card-text text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus temporibus beatae, neque, numquam sed animi amet dicta
                  sit sequi laudantium iusto inventore exercitationem veniam
                  magnam placeat corporis consequuntur sint minus.
                </p>
                <Link to="/about" className="btn btn-outline-warning btn-block">
                  {heading}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
