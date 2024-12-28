import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Col, Container, Row } from 'react-bootstrap';
import { FaInfo } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaHeartBroken } from "react-icons/fa";

const ProductCard = ({ title, image, description, price, id, product }) => {
    const [heartProduct, setHeartProduct] = React.useState([]); 
    const nav = useNavigate();

    // LocalStorage-dən favorites məlumatını almaq
    React.useEffect(() => {
        const savedFavorites = localStorage.getItem('favorites');
        const heartProducts = savedFavorites ? JSON.parse(savedFavorites) : [];
        setHeartProduct(heartProducts);
    }, []);

    // Favorites-a məhsul əlavə etmək və ya silmək
    const handleFavorites = () => {
        const isAlreadyAdded = heartProduct.some((item) => item.id === product.id);

        if (isAlreadyAdded) {
            const updatedHeartProduct = heartProduct.filter((item) => item.id !== product.id);
            setHeartProduct(updatedHeartProduct);
            localStorage.setItem('favorites', JSON.stringify(updatedHeartProduct)); 
        } else {
            const updatedHeartProduct = [...heartProduct, product];
            setHeartProduct(updatedHeartProduct);
            localStorage.setItem('favorites', JSON.stringify(updatedHeartProduct));
        }
    };

    // Məhsulun favorit olub-olmaması
    const isFavorite = heartProduct.some((item) => item.id === product.id);

    return (
        <Container>
            <Row>
                <Col>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={image || 'default-image-url'}  // image yoxdursa default şəkil əlavə edin
                            title={title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <FaInfo onClick={() => nav(`/products/${id}`)} /> {/* Məhsulun səhifəsinə yönləndirmək */}
                            {isFavorite ? (
                                <FaHeart
                                    style={{ fontSize: "1.5rem", color: "red" }} 
                                    onClick={handleFavorites}
                                />
                            ) : (
                                <FaHeartBroken
                                    style={{ fontSize: "1.5rem", color: "grey" }} 
                                    onClick={handleFavorites}
                                />
                            )}
                        </CardActions>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductCard;
