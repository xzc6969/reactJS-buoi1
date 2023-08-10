import React, { Component } from 'react'
import Banner from './Banner'
import Item from './Item'

export default class Body extends Component {
  render() {
    return (
    <>
      <Banner />
      <section class="pt-4">
            <div class="container px-lg-5">
                <div class="row gx-lg-5">
                    <div class="col-lg-3 col-xxl-4 mb-5">
                      <Item />
                    </div>
                    <div class="col-lg-3 col-xxl-4 mb-5">
                      <Item />
                    </div>
                    <div class="col-lg-3 col-xxl-4 mb-5">
                      <Item />
                    </div>
                    <div class="col-lg-3 col-xxl-4 mb-5">
                      <Item />
                    </div>
                </div>
            </div>
        </section>
    </>
    )
  }
}

