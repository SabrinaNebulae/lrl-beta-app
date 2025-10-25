<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('memberships', function (Blueprint $table) {
            $table->id();
            $table->foreignId('member_id')->constrained('members')->onDelete('cascade');
            $table->foreignId('admin_id')->nullable()->constrained('users')->onDelete('set null');
            $table->foreignId('package_id')->constrained('packages')->onDelete('cascade');
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->enum('status', ['active', 'expired', 'pending'])->default('pending');
            $table->decimal('amount', 10, 2)->default(0);
            $table->enum('payment_status', ['paid', 'unpaid', 'partial'])->default('unpaid');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('memberships');
    }
};
