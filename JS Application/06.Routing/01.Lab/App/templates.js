const furnitureItemTemplate = ({
    make, price, model, image, year, material, description
}) => `
      <div class="row space-top">
        <div class="col-md-4">
          <div class="card text-white bg-primary">
            <div class="card-body">
              <blockquote class="card-blockquote">
                <img src="${image}" />
                <p>${description}</p>
                <footer>Someone famous in
                  <cite title="Source Title">${make}</cite>
                </footer>
                <div class="pull-right">
                  <a href=”#” class="btn btn-info"></a>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
`