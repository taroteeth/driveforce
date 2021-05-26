<?php
    $header = get_sub_field('header');
    $accentImage = get_sub_field('accent_image');

    if(get_sub_field('slides')){
        $slideCount = count( get_sub_field( 'slides' ) );
    }
?>
<!-- TODO: mobile and tablet styling - ask about whether all images will be same dims or no -->
<div class="module-wrapper dark-bg endorsement-slider">
    <div class="module-padded">
        <?php if($header): ?>
            <h2 data-animation-effect="splitSlideUpWord" data-animation-trigger="breakpoint" data-splitting="chars"><?php echo $header ?></h2>
        <?php endif; ?>

        <?php if(have_rows('slides')): ?>
            <div id="slider">
                    <div class="containers row">
                        <div class="img-container col-md-6">
                            <?php while(have_rows('slides')): the_row(); ?>
                                <?php
                                $image = get_sub_field('image');
                                $index = get_row_index();
                                ?>
                                <img class="accent-image <?php if($index === 1) echo ' active' ?>" data-slide="<?php echo $index ?>" src="<?php echo $image['url'] ?>" alt="alt text" />
                            <?php endwhile ?>
                        </div>

                        <div class="details-container col-md-6">
                            <?php while(have_rows('slides')): the_row(); ?>
                                <?php
                                $name = get_sub_field('name');
                                $title = get_sub_field('title');
                                $product = get_sub_field('product');
                                $quote = get_sub_field('quote');
                                $index = get_row_index();
                                ?>
                                <div class="details-block <?php if($index === 1) echo ' active' ?>" data-slide="<?php echo $index ?>">
                                    <?php if($name): ?>
                                        <h3><?php echo $name ?></h3>
                                    <?php endif; ?>

                                    <?php if($title): ?>
                                        <p class="title"><?php echo $title ?></p>
                                    <?php endif; ?>

                                    <?php if($product): ?>
                                        <p class="product"><?php echo $product ?></p>
                                    <?php endif; ?>

                                    <?php if($quote): ?>
                                        <p class="quote"><?php echo $quote ?></p>
                                    <?php endif; ?>
                                </div>
                            <?php endwhile ?>
                        </div>
                    </div>

                    <div class="slider-nav">
                        <?php for($i = 1; $i <= $slideCount; $i++ ): ?>
                            <button class="slider-nav-btn <?php if($i === 1) echo ' active'?>" data-slide="<?php echo $i ?>"></button>
                        <?php endfor; ?>
                    </div>
            </div>
        <?php endif; ?>
    </div>
</div>