import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.ctfassets.net/sfnkq8lmu5d7/4O2ptSrxmEevlpVhqJ50Rb/e700680391a198a0f35951f90fc381d1/Hero_-_10_Super_Foods_For_You_and_Your_Dog.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Organic Foods
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://www.madebycleo.com/cdn/shop/products/il_fullxfull.3997893363_8f8m_800x.jpg?v=1655503307"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Birthday Special
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://topdogtips.com/wp-content/uploads/2016/04/Different-Types-of-Dog-Food.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Food and Guide
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.saymedia-content.com/.image/t_share/MTc0MjQ3MjE4NjA0MTU2Nzk2/making-your-own-fish-food.jpg"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Home Made
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://nepigeonsupplies.com/wp-content/uploads/2021/11/What-Do-Pigeons-Eat-Pigeon-Food-Guide.jpg"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Bird Special
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://img.freepik.com/free-photo/cute-animals-group-white-background_23-2150038551.jpg?w=360"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Combo Offer
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;