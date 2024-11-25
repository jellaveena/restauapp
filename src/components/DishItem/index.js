import './index.css'

const DishItem = ({
  dishDetails,
  cartItems,
  addItemToCart,
  removeItemFromCart,
}) => {
  const {
    dishId,
    dishName,
    dishType,
    dishPrice,
    dishCurrency,
    dishDescription,
    dishImage,
    dishCalories,
    addonCat,
    dishAvailability,
  } = dishDetails
  const onIncreaseQuantity = () => addItemToCart(dishDetails)
  const onDecreaseQuantity = () => removeItemFromCart(dishDetails)

  const getQuantity = () => {
    const cartItem = cartItems.find(item => item.dishId === dishId)
    return cartItem ? cartItem.quantity : 0
  }
  const renderControllerButton = () => (
    <div>
      <button type="button" onClick={onDecreaseQuantity}>
        {' '}
        -
      </button>
      <p>{getQuantity()}</p>
      <button type="button" onClick={onIncreaseQuantity}>
        {' '}
        +{' '}
      </button>
    </div>
  )
  return (
    <li>
      <div
        className={`veg-border ${dishType === 1 ? 'non-veg-border' : ''} me-3`}
      >
        <div
          className={`veg-round ${dishType === 1 ? 'non-veg-round' : ''}`}
        ></div>
        <div>
          <h1>{dishName}</h1>
          <p>
            {dishCurrency} {dishPrice}
          </p>
          <p>{dishDescription}</p>
          {dishAvailability && renderControllerButton()}
          {!dishAvailability && (
            <p className="not-availability-text text-danger">Not available</p>
          )}
          {addonCat.length !== 0 && (
            <p className="addon-availability-text">Customizations available</p>
          )}
        </div>
        <p>{dishCalories} calories</p>
        <img alt={dishName} src={dishImage} />
      </div>
    </li>
  )
}

export default DishItem
