import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Col, Container, Row } from 'react-bootstrap';
import { FaInfo, FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { wishlistContext } from '../../context/wishlist';

const ProductCard = ({ title, image, description, price, id }) => {
    const { wishlist, setWishlist } = React.useContext(wishlistContext);
    const nav = useNavigate();

    const handleWishlist = () => {
        if (wishlist.includes(id)) {
            const updatedWishlist = wishlist.filter((w) => w !== id);
            setWishlist(updatedWishlist);
        } else {
            setWishlist([...wishlist, id]);
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={image}
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
                            <FaInfo onClick={() => nav(`/products/${id}`)} />
                            {wishlist.includes(id) ? (
                                <FaHeart
                                    style={{ fontSize: "1.5rem", color: "red" }}
                                    onClick={handleWishlist}
                                />
                            ) : (
                                <CiHeart
                                    style={{ fontSize: "1.5rem", color: "gray" }}
                                    onClick={handleWishlist}
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
