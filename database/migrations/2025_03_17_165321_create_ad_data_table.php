<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ad_data', function (Blueprint $table) {
            $table->id();
            $table->string('AD_manager_id');
            $table->string('campaign_id');
            $table->string('title')->nullable();
            $table->string('thumbnail',900)->nullable();
            $table->string('spend')->default('0');
            $table->string('budget')->default('1');
            $table->enum('budget_type',['lifetime','daily'])->default('lifetime');
            $table->enum('status', ['Active', 'Inactive', 'On Review'])->default('active');
            $table->string('objective')->nullable();
            $table->string('result');
            $table->string('reach');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ad_data');
    }
};
