<?php
/**
 * @package Widget Vakario
 * @version 1.0.0
 */
/*
Plugin Name: Booking Engine Yoplanning
Plugin URI: 
Description: Ajouter le moteur de vente en ligne.
Author: Vakario
Version: 1.0.0
*/

function bey_show_service () {
    wp_enqueue_script(
        'booking_yoplanning_block',
        plugin_dir_url(__FILE__) . 'booking_yoplanning_block.js',
        array('wp-blocks','wp-editor'),
        true
      );
}

add_action('enqueue_block_editor_assets', 'bey_show_service');


 